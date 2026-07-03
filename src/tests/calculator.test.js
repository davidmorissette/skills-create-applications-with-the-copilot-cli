const { add, sub, mul, div } = require('../calculator-lib');

describe('Calculator library', () => {
  test('adds 2 + 3 = 5 (example from image)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts 10 - 4 = 6 (example from image)', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('multiplies 45 * 2 = 90 (example from image)', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('divides 20 / 5 = 4 (example from image)', () => {
    expect(div(20, 5)).toBe(4);
  });

  // Additional cases
  test('handles negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
    expect(sub(-5, 3)).toBe(-8);
    expect(mul(-2, 4)).toBe(-8);
    expect(div(-10, 2)).toBe(-5);
  });

  test('handles floating point numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(div(5.5, 2)).toBeCloseTo(2.75);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow(/Division by zero/);
  });

  test('large numbers', () => {
    expect(mul(1e6, 1e3)).toBe(1e9);
  });
});
