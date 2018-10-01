exports.ROT13 = function(string) {
  const add = 13;

  let result = "";
  for (let i = 0; i < string.length; i++)
    result += String.fromCharCode(string.charCodeAt(i) + add);

  return result;
};
