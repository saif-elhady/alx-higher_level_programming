#!/usr/bin/node
const { argv } = require('process');
const arg = Number(argv[2]);

function factorial (arg) {
  if (arg === 1 || isNaN(arg)) {
    return (1);
  } else {
    return (arg * factorial(arg - 1));
  }
}
console.log(factorial(arg));
