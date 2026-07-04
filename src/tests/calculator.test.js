const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator-lib');

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

  // Tests for modulo operation
  describe('Modulo operation', () => {
    test('modulo with 5 % 2 = 1 (example from image)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('modulo with positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(modulo(20, 4)).toBe(0);
      expect(modulo(17, 5)).toBe(2);
    });

    test('modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('modulo by zero throws', () => {
      expect(() => modulo(5, 0)).toThrow(/Modulo by zero/);
    });
  });

  // Tests for power operation
  describe('Power operation', () => {
    test('power with 2 ^ 3 = 8 (example from image)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power with positive exponents', () => {
      expect(power(2, 0)).toBe(1);
      expect(power(2, 4)).toBe(16);
      expect(power(5, 2)).toBe(25);
      expect(power(3, 3)).toBe(27);
    });

    test('power with negative exponents', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
      expect(power(10, -2)).toBeCloseTo(0.01);
    });

    test('power with negative base', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-2, 4)).toBe(16);
    });

    test('power with fractional exponents', () => {
      expect(power(4, 0.5)).toBeCloseTo(2);
      expect(power(8, 1/3)).toBeCloseTo(2);
    });

    test('power with zero base', () => {
      expect(power(0, 5)).toBe(0);
      expect(power(0, 0)).toBe(1);
    });

    test('large power results', () => {
      expect(power(10, 6)).toBe(1e6);
    });
  });

  // Tests for square root operation
  describe('Square root operation', () => {
    test('square root with √16 = 4 (example from image)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('square root with perfect squares', () => {
      expect(squareRoot(0)).toBe(0);
      expect(squareRoot(1)).toBe(1);
      expect(squareRoot(4)).toBe(2);
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(100)).toBe(10);
    });

    test('square root with non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213562, 5);
      expect(squareRoot(5)).toBeCloseTo(2.236067977, 5);
      expect(squareRoot(10)).toBeCloseTo(3.162277660, 5);
    });

    test('square root with decimal numbers', () => {
      expect(squareRoot(0.25)).toBe(0.5);
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('square root of negative number throws', () => {
      expect(() => squareRoot(-1)).toThrow(/Cannot calculate square root of a negative number/);
      expect(() => squareRoot(-4)).toThrow(/Cannot calculate square root of a negative number/);
      expect(() => squareRoot(-0.5)).toThrow(/Cannot calculate square root of a negative number/);
    });

    test('square root of very large numbers', () => {
      expect(squareRoot(1e6)).toBe(1e3);
      expect(squareRoot(1e8)).toBe(1e4);
    });
  });
});
