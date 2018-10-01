const MD5 = require("../algorithms/MD5").MD5;
const SHA256 = require("../algorithms/SHA256").SHA256;
const ADFGVX = require("../algorithms/ADFGVX").ADFGVX;
const CAESAR = require("../algorithms/CAESAR").CAESAR;
const ROT13 = require("../algorithms/ROT13").ROT13;
const DES = require("../algorithms/DES").DES;
const ONE_TIME_PAD = require("../algorithms/ONE_TIME_PAD").ONE_TIME_PAD;
const algorithms = require("../constants/constants").algorithms;

exports.hashValue = (algorithm, value) => {
  switch (algorithm) {
    case algorithms.MD5:
      return MD5(value);
    case algorithms.SHA256:
      return SHA256(value);
    case algorithms.ADFGVX:
      return ADFGVX(value);
    case algorithms.ROT13:
      return ROT13(value);
    case algorithms.ONE_TIME_PAD:
      return ONE_TIME_PAD(value);
    case algorithms.CAESAR:
      return CAESAR(value);
    case algorithms.DES:
      return DES(value);
    default:
      return null;
  }
};
