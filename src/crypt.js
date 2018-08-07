const MD5 = require('./algorithms/MD5').MD5;
const SHA256 = require('./algorithms/SHA256').SHA256;
const ADFGVX = require('./algorithms/ADFGVX').ADFGVX;
const CAESAR = require('./algorithms/CAESAR').CAESAR;
const ROT13 = require('./algorithms/ROT13').ROT13;
const ONE_TIME_PAD = require('./algorithms/ONE_TIME_PAD').ONE_TIME_PAD;
const algorithms = require('./constants/constants').algorithms;

var generateResponse = (algorithm, result) => {
    return {
        algorithm,
        result
    }
}

var hash = (options) => {
    var algorithm = options.algorithm;
    var text = options.value;

    switch(algorithm) {
        case 'MD5':
            return generateResponse(algorithm, MD5(text));

        case 'SHA256':
            return generateResponse(algorithm, SHA256(text));

        case 'ADFGVX':
            return generateResponse(algorithm, ADFGVX(text));

        case 'ROT13':
            return generateResponse(algorithm, ROT13(text));

        case 'ONE_TIME_PAD':
            return generateResponse(algorithm, ONE_TIME_PAD(text));
            
        default:
        case 'CAESAR':
            return generateResponse('CAESAR', CAESAR(text));
    }
}

console.log(hash({
    algorithm: algorithms.ONE_TIME_PAD,
    value: 'W'
}))