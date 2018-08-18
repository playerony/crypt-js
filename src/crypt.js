const algorithm = require('./constants/constants').algorithms;
const validator = require('./utils/validator').validator;
const hashValue = require('./utils/crypt.utils').hashValue;

var generateResponse = (algorithm, result) => {
    return {
        algorithm,
        result
    }
}

var hash = (options) => {
    var validate = validator(options);

    if(validate.response != null) {
        var algorithms = options.algorithms;
        var value = options.value;

        for(var i=0; i<algorithms.length; i++) {
            var algorithm = algorithms[i];
            var hValue = hashValue(algorithm, value);

            if(hValue != null)
                value = hValue;
        }

        if(value != options.value)
            return generateResponse(algorithms, value);
    }

    return generateResponse([], options.value);
}

console.log(hash({
    algorithms: [algorithm.DES],
    value: 'WORK'
}))