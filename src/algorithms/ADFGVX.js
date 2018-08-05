exports.ADFGVX = function(string) {
    var word = ['*', 'A', ',', '^', '!', 'a', 'K', ')', '/', ';', 'G', 'f', '@', 'D', '~', 'm', '(', 'N', '+', '-', '1', '2', '3', '4', '5'];
    
    var generateAsciiTable = () => {
        var result = [];
        var lineOfLetters = [];
        var counter = 0;

        for(var i=0; i<512; i++) {
            lineOfLetters.push(String.fromCharCode(i));
            counter++;

            if(counter % 23 === 0) {
                counter = 0;
                result.push(lineOfLetters);
                lineOfLetters = [];
            }
        }

        if(lineOfLetters.length > 0) {
            result.push(lineOfLetters);
            lineOfLetters = [];
        }

        return result;
    };

    var lettersTable = generateAsciiTable();

    var getLetter = (x, y) => {
        return lettersTable[y][x];
    };

    var findLetter = (char) => {
        for(var i=0; i<lettersTable.length; i++) {
            var line = lettersTable[i];

            for(var j=0; j<line.length; j++) {
                var letter = getLetter(j, i);

                if(letter === char)
                    return word[j] + word[i];
            }
        }

        return '';
    };

    var encodeWord = (string) => {
        var result = '';
        for(var i=0; i<string.length; i++)
            result += findLetter(string[i]);

        return result;
    };

    return encodeWord(string);
}