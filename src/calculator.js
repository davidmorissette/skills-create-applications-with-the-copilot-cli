/**
 * Calculator module providing basic and extended arithmetic operations.
 *
 * Supported operations:
 *   - addition
 *   - subtraction
 *   - multiplication
 *   - division (with division-by-zero error handling)
 *   - modulo (with division-by-zero error handling)
 *   - power (exponentiation)
 *   - squareRoot (with error handling for negative numbers)
 */

/**
 * Adds two numbers together (addition).
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first (subtraction).
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers (multiplication).
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second (division).
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} If b is zero (division by zero).
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Returns the remainder of dividing a by b (modulo).
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of a divided by b.
 * @throws {Error} If b is zero (modulo by zero).
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises a base to an exponent (power / exponentiation).
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent to raise the base to.
 * @returns {number} base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of a number (squareRoot).
 * @param {number} n - The number to compute the square root of.
 * @returns {number} The square root of n.
 * @throws {Error} If n is negative (square root of a negative number).
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot compute square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};
