exports.ONE_TIME_PAD = function(string) {
    var convertCharToBinary = (char) => {
        return char.charCodeAt(0).toString(2);
    };

    var wordToBinary = (string) => {
        var result = '';
        for(var i=0; i<string.length; i++)
            result += convertCharToBinary(string[i]);

        return result;
    };

    var generateHash = (string) => {
        var result = '';
        for(var i=0; i<string.length; i++)
            if(i%3 === 0)
                result += '1';
            else
                result += '0';

        return result;
    };

    var mixBinaryWordWithHash = (binaryWord, hash) => {
        var result = '';
        for(var i=0; i<binaryWord.length; i++)
            result += ((binaryWord[i] - '0') ^ (hash[i] - '0')); 

        return result;
    };

    var encodeWord = (string) => {
        var binaryWord = wordToBinary(string);
        var hash = generateHash(binaryWord);

        return mixBinaryWordWithHash(binaryWord, hash);
    };

    return encodeWord(string);
}