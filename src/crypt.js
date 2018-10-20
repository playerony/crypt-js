const validator = require("./utils/validator").validator;
const hashValue = require("./utils/crypt.utils").hashValue;
const algorithms = require("./constants/constants").algorithms;

const generateResponse = (algorithms, result) => {
  return {
    algorithms,
    result
  };
};

module.exports = {
  algorithms: algorithms,
  hash: function(options) {
    const validate = validator(options);

    if (validate.response != null) {
      const algorithms = options.algorithms;
      let value = options.value;

      for (let i = 0; i < algorithms.length; i++) {
        const algorithm = algorithms[i];
        const hValue = hashValue(algorithm, value);

        if (hValue != null) value = hValue;
      }

      if (value != options.value) return generateResponse(algorithms, value);
    }

    return generateResponse([], options.value);
  }
};
