exports.ONE_TIME_PAD = function(string) {
  const wordToBinary = string => {
    let result = "";
    for (let i = 0; i < string.length; i++)
      result += string[i].charCodeAt(0).toString(2);

    return result;
  };

  const generateHash = string => {
    let result = "";
    for (let i = 0; i < string.length; i++)
      if (i % 3 === 0) result += "1";
      else result += "0";

    return result;
  };

  const mixBinaryWordWithHash = (binaryWord, hash) => {
    let result = "";
    for (let i = 0; i < binaryWord.length; i++)
      result += (binaryWord[i] - "0") ^ (hash[i] - "0");

    return result;
  };

  const binaryWord = wordToBinary(string);

  return mixBinaryWordWithHash(binaryWord, generateHash(binaryWord));
};
