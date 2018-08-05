const MD5 = require('./algorithms/MD5').MD5;
const SHA256 = require('./algorithms/SHA256').SHA256;
const ADFGVX = require('./algorithms/ADFGVX').ADFGVX;
const text = "WORK";

console.log(MD5(text));
console.log(SHA256(text));
console.log(ADFGVX(text));