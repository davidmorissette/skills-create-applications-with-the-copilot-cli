const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

// --- addition ---
describe('add', () => {
  test('addition of two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('addition with a negative number', () => {
    expect(add(-1, 4)).toBe(3);
  });

  test('addition of two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('addition with zero', () => {
    expect(add(5, 0)).toBe(5);
  });
});

// --- subtraction ---
describe('subtract', () => {
  test('subtraction of two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtraction resulting in a negative number', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test('subtraction with zero', () => {
    expect(subtract(5, 0)).toBe(5);
  });
});

// --- multiplication ---
describe('multiply', () => {
  test('multiplication of two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('multiplication with zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('multiplication with a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});

// --- division ---
describe('divide', () => {
  test('division of two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('division resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('division by zero throws an error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
  });
});

// --- modulo ---
describe('modulo', () => {
  test('modulo of two positive numbers', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo with no remainder', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('modulo with a larger divisor', () => {
    expect(modulo(4, 7)).toBe(4);
  });

  test('modulo by zero throws an error', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// --- power (exponentiation) ---
describe('power', () => {
  test('power: 2 to the 3rd equals 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power: any number to 0 equals 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('power: any number to 1 equals itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('power: negative base with even exponent', () => {
    expect(power(-2, 2)).toBe(4);
  });

  test('power: negative base with odd exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });
});

// --- squareRoot ---
describe('squareRoot', () => {
  test('square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('square root of a negative number throws an error', () => {
    expect(() => squareRoot(-4)).toThrow(
      'Cannot compute square root of a negative number'
    );
  });
});
