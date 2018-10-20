const hash = require("./index").hash;
const algorithms = require("./index").algorithms;

console.log(
  hash({
    algorithms: [algorithms.DES, algorithms.MD5, algorithms.ADFGVX],
    value: "WOrK"
  })
);
