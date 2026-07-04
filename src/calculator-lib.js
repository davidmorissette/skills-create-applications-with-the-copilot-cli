// Calculator library: pure functions exported for unit testing

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function parseNumber(str) {
  const n = Number(str);
  if (!Number.isFinite(n)) return null;
  return n;
}

module.exports = {
  add,
  sub,
  mul,
  div,
  modulo,
  power,
  squareRoot,
  parseNumber,
};
