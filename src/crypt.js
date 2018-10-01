const algorithms = require("./constants/constants").algorithms;
const validator = require("./utils/validator").validator;
const hashValue = require("./utils/crypt.utils").hashValue;

const generateResponse = (algorithm, result) => {
  return {
    algorithm,
    result
  };
};

const hash = options => {
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
};

console.log(
  hash({
    algorithms: [algorithms.DES, algorithms.MD5, algorithms.ADFGVX],
    value: "WOrK"
  })
);
