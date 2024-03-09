// @vitest-environment jsdom

import { describe, test, expect } from 'vitest';
import { renderItems } from './renderer';

const users: User[] = [
  { id: 1, name: 'John', age: 30, role: 'user' },
  { id: 2, name: 'Jane', age: 25, role: 'admin' },
  { id: 3, name: 'Jack', age: 40, role: 'user' },
];

describe('User renderer', () => {
  const adminUsers = users.filter((user) => user.role === 'admin');
  const nonAdminUsers = users.filter((user) => user.role === 'user');

  test('should render all users if admin is rendering the list', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);

    const userItems = Array.from(container.querySelectorAll('li'));

    expect(userItems).toHaveLength(users.length);
  });

  test('should render only regular users if non-admin is rendering the list', () => {
    localStorage.setItem('userRole', 'user');

    const container = document.createElement('div');
    renderItems(container, users);

    const userItems = Array.from(container.querySelectorAll('li'));

    expect(userItems).toHaveLength(nonAdminUsers.length);
  });

  test('should render admin label for admin users', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);

    const adminLabels = Array.from(container.querySelectorAll('li')).filter((li) => li.textContent?.includes('(Admin)'));
    expect(adminLabels).toHaveLength(adminUsers.length);
  });

  test('should not render admin label for regular users', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);

    const userItems = Array.from(container.querySelectorAll('li'));
    const nonAdminLabels = userItems.filter((li) => !li.textContent?.includes('(Admin)'));

    expect(nonAdminLabels).toHaveLength(nonAdminUsers.length);
  });

  test('should render name and age for all users', () => {
    localStorage.setItem('userRole', 'admin');

    const container = document.createElement('div');
    renderItems(container, users);

    const userItems = Array.from(container.querySelectorAll('li'));

    userItems.forEach((userItem, index) => {
      expect(userItem.textContent).toContain(`Name: ${users[index].name}, Age: ${users[index].age}`);
    });
  });
});
