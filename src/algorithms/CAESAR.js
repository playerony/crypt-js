exports.CAESAR = function(string) {
  const add = 3;

  const encodeWord = string => {
    let result = "";
    for (var i = 0; i < string.length; i++)
      result += String.fromCharCode(string.charCodeAt(i) + add);

    return result;
  };

  return encodeWord(string);
};
