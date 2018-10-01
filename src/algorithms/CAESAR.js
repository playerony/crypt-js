exports.CAESAR = function(string) {
  const add = 3;

  let result = "";
  for (let i = 0; i < string.length; i++)
    result += String.fromCharCode(string.charCodeAt(i) + add);

  return result;
};
