#!/usr/bin/node
const { argv } = require('process');
function add(a, b) {
  console.log(a + b);
}
add(+argv[2], +argv[3]);
