#!/usr/bin/node
const { argv } = require('process');
let arg = argv[2];
let str = 'C is fun';
if (isNaN(arg))
  console.log('Missing number of occurrences');

else {
  for (let i = 0; i < arg; i++)
    console.log(str);
}
