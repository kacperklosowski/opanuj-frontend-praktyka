export type MathOperation = (a: number, b: number) => number;

export const sum: MathOperation = (a, b) => a + b;

export const subtract: MathOperation = (a, b)  => a - b;

export const multiply: MathOperation = (a, b)  => a * b;

export const divide: MathOperation = (a, b)  => {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return a / b;
};
