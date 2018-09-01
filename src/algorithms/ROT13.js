exports.ROT13 = function(string) {
  const add = 13;

  const encodeWord = string => {
    let result = "";
    for (var i = 0; i < string.length; i++)
      result += String.fromCharCode(string.charCodeAt(i) + add);

    return result;
  };

  return encodeWord(string);
};
