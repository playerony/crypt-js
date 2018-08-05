const MD5 = require('./algorithms/MD5').MD5;
const SHA256 = require('./algorithms/SHA256').SHA256;
const ADFGVX = require('./algorithms/ADFGVX').ADFGVX;

var generateResponse = (algorithm, result) => {
    return {
        algorithm,
        result
    }
}

var encode = (options) => {
    var algorithm = options.algorithm;
    var text = options.value;

    switch(algorithm) {
        case 'MD5':
            return generateResponse(algorithm, MD5(text));

        case 'SHA256':
            return generateResponse(algorithm, SHA256(text));

        default:
        case 'ADFGVX':
            return generateResponse('ADFGVX', ADFGVX(text));
    }
}

console.log(encode({
    algorithm: 'SHA256',
    value: 'WORD'
}))