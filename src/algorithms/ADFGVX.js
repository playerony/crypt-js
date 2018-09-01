exports.ADFGVX = function(string) {
  const word = [
    "*",
    "A",
    ",",
    "^",
    "!",
    "a",
    "K",
    ")",
    "/",
    ";",
    "G",
    "f",
    "@",
    "D",
    "~",
    "m",
    "(",
    "N",
    "+",
    "-",
    "1",
    "2",
    "3",
    "4",
    "5"
  ];

  const generateAsciiTable = () => {
    let result = [];
    let lineOfLetters = [];
    let counter = 0;

    for (let i = 0; i < 512; i++) {
      lineOfLetters.push(String.fromCharCode(i));
      counter++;

      if (counter % 23 === 0) {
        counter = 0;
        result.push(lineOfLetters);
        lineOfLetters = [];
      }
    }

    if (lineOfLetters.length > 0) {
      result.push(lineOfLetters);
      lineOfLetters = [];
    }

    return result;
  };

  const lettersTable = generateAsciiTable();

  const getLetter = (x, y) => {
    return lettersTable[y][x];
  };

  const findLetter = char => {
    for (let i = 0; i < lettersTable.length; i++) {
      const line = lettersTable[i];

      for (let j = 0; j < line.length; j++) {
        const letter = getLetter(j, i);

        if (letter === char) return word[j] + word[i];
      }
    }

    return "";
  };

  const encodeWord = string => {
    let result = "";
    for (let i = 0; i < string.length; i++) result += findLetter(string[i]);

    return result;
  };

  return encodeWord(string);
};
