#!/usr/bin/env node

/*
 Node.js CLI Calculator

 Supported operations:
 - add    (addition)       : a + b
 - sub    (subtraction)    : a - b
 - mul    (multiplication) : a * b
 - div    (division)       : a / b (division by zero is handled as an error)
 - mod    (modulo)         : a % b (remainder of a divided by b)
 - pow    (exponentiation) : base ^ exponent
 - sqrt   (square root)    : √n (with error handling for negative numbers)

 Usage examples:
   node src/calculator.js add 2 3     # prints 5
   node src/calculator.js sub 10 4    # prints 6
   node src/calculator.js mul 3 7     # prints 21
   node src/calculator.js div 8 2     # prints 4
   node src/calculator.js mod 10 3    # prints 1
   node src/calculator.js pow 2 3     # prints 8
   node src/calculator.js sqrt 16     # prints 4

 The CLI exits with code 0 on success, and non-zero on error.
*/

const { add, sub, mul, div, modulo, power, squareRoot, parseNumber } = require('./calculator-lib');

function printHelp() {
  console.log(`Calculator CLI

Usage:
  calculator <command> <a> [b]

Commands:
  add    Add a and b
  sub    Subtract b from a
  mul    Multiply a by b
  div    Divide a by b (errors on divide-by-zero)
  mod    Modulo: remainder of a divided by b
  pow    Power: raise a to the power of b
  sqrt   Square root of a (only requires one operand)

Options:
  -h, --help Show this help message

Examples:
  node src/calculator.js add 2 3
  node src/calculator.js div 10 2
  node src/calculator.js mod 10 3
  node src/calculator.js pow 2 3
  node src/calculator.js sqrt 16
`);
}

function error(msg) {
  console.error(`Error: ${msg}`);
  process.exitCode = 1;
}

async function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv[0] === '-h' || argv[0] === '--help') {
    printHelp();
    return;
  }

  const [cmd, aStr, bStr] = argv;

  if (!cmd || aStr === undefined) {
    error('Missing arguments. Run with --help for usage.');
    process.exit(1);
  }

  // sqrt only requires one operand
  if (cmd === 'sqrt') {
    const a = parseNumber(aStr);
    if (a === null) {
      error('Operand must be a valid number.');
      process.exit(1);
    }
    try {
      const result = squareRoot(a);
      console.log(result);
    } catch (err) {
      error(err.message || 'Operation error');
      process.exit(1);
    }
    return;
  }

  // All other operations require two operands
  if (bStr === undefined) {
    error('Missing second operand. Run with --help for usage.');
    process.exit(1);
  }

  const a = parseNumber(aStr);
  const b = parseNumber(bStr);

  if (a === null || b === null) {
    error('Both operands must be valid numbers.');
    process.exit(1);
  }

  let result;
  try {
    switch (cmd) {
      case 'add':
        result = add(a, b);
        break;
      case 'sub':
        result = sub(a, b);
        break;
      case 'mul':
        result = mul(a, b);
        break;
      case 'div':
        result = div(a, b);
        break;
      case 'mod':
        result = modulo(a, b);
        break;
      case 'pow':
        result = power(a, b);
        break;
      default:
        error(`Unknown command: ${cmd}`);
        printHelp();
        process.exit(1);
    }
  } catch (err) {
    error(err.message || 'Operation error');
    process.exit(1);
  }

  console.log(result);
}

main().catch((err) => {
  console.error('Unexpected error:', err?.message ?? err);
  process.exit(1);
});
