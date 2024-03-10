// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { it, expect, afterEach, describe } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserList from './UserList';

afterEach(cleanup);

describe('UserList', () => {
  it('should display default controls', () => {
    render(<UserList />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Age')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  it('should add new user', async () => {
    const user = userEvent.setup();
    render(<UserList />);

    await user.type(screen.getByPlaceholderText('Name'), 'John');
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe');
    await user.type(screen.getByPlaceholderText('Age'), '30');

    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('John Doe, 30')).toBeInTheDocument();
  });

  it('should delete user', async () => {
    const user = userEvent.setup();
    render(<UserList />);

    await user.type(screen.getByPlaceholderText('Name'), 'John');
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe');
    await user.type(screen.getByPlaceholderText('Age'), '30');

    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('John Doe, 30')).toBeInTheDocument();

    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    await user.click(deleteButton);

    expect(screen.queryByText('John Doe, 30')).not.toBeInTheDocument();
  });

  it('should not add user with empty fields', async () => {
    const user = userEvent.setup();
    render(<UserList />);

    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('All fields are required')).toBeInTheDocument();
  });

  it('should handle delete with multiple users', async () => {
    const user = userEvent.setup();
    render(<UserList />);

    await user.type(screen.getByPlaceholderText('Name'), 'John');
    await user.type(screen.getByPlaceholderText('Last name'), 'Doe');
    await user.type(screen.getByPlaceholderText('Age'), '30');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    await user.type(screen.getByPlaceholderText('Name'), 'Tom');
    await user.type(screen.getByPlaceholderText('Last name'), 'Smith');
    await user.type(screen.getByPlaceholderText('Age'), '40');
    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('John Doe, 30')).toBeInTheDocument();
    expect(screen.getByText('Tom Smith, 40')).toBeInTheDocument();

    // Only delete Tom
    const tomRow = screen.getByText('Tom Smith, 40').closest('li');
    expect(tomRow).not.toBeNull();

    const tomDeleteButton = within(tomRow as HTMLLIElement).getByText('Delete');
    await user.click(tomDeleteButton);

    expect(screen.queryByText('Tom Smith, 40')).not.toBeInTheDocument();
    expect(screen.getByText('John Doe, 30')).toBeInTheDocument();
  });
});
