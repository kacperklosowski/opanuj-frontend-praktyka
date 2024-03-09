import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return no errors if all fields are valid', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors.length).toBe(0);
    });

    test('should return an error if first name is too short', () => {
        const errors = formValidator('J', 'Doe', 30);
        expect(errors).toContain('First name must be at least 2 characters long');
    });

    test('should return an error if last name is too short', () => {
        const errors = formValidator('John', 'D', 30);
        expect(errors).toContain('Last name must be at least 2 characters long');
    });

    test('should throw an error if age is not a number', () => {
        // @ts-ignore | so we can test the error
        expect(() => formValidator('John', 'Doe', '7')).toThrow('Age must be a number');
    });
});
