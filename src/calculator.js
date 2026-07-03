#!/usr/bin/env node

/*
 Node.js CLI Calculator

 Supported operations (basic arithmetic shown in the provided image):
 - add    (addition)       : a + b
 - sub    (subtraction)    : a - b
 - mul    (multiplication) : a * b
 - div    (division)       : a / b (division by zero is handled as an error)

 Usage examples:
   node src/calculator.js add 2 3     # prints 5
   node src/calculator.js sub 10 4    # prints 6
   node src/calculator.js mul 3 7     # prints 21
   node src/calculator.js div 8 2     # prints 4

 The CLI exits with code 0 on success, and non-zero on error.
*/

const { add, sub, mul, div, parseNumber } = require('./calculator-lib');

function printHelp() {
  console.log(`Calculator CLI

Usage:
  calculator <command> <a> <b>

Commands:
  add    Add a and b
  sub    Subtract b from a
  mul    Multiply a by b
  div    Divide a by b (errors on divide-by-zero)

Options:
  -h, --help Show this help message

Examples:
  node src/calculator.js add 2 3
  node src/calculator.js div 10 2
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

  if (!cmd || aStr === undefined || bStr === undefined) {
    error('Missing arguments. Run with --help for usage.');
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
      default:
        error(`Unknown command: ${cmd}`);
        printHelp();
        process.exit(1);
    }
  } catch (err) {
    // e.g. division by zero
    error(err.message || 'Operation error');
    process.exit(1);
  }

  // Print result to stdout (no extra formatting)
  console.log(result);
}

main().catch((err) => {
  console.error('Unexpected error:', err?.message ?? err);
  process.exit(1);
});
