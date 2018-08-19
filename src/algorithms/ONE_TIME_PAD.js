exports.ONE_TIME_PAD = function(string) {
    const convertCharToBinary = (char) => {
        return char.charCodeAt(0).toString(2);
    };

    const wordToBinary = (string) => {
        let result = '';
        for(var i=0; i<string.length; i++)
            result += convertCharToBinary(string[i]);

        return result;
    };

    const generateHash = (string) => {
        let result = '';
        for(var i=0; i<string.length; i++)
            if(i%3 === 0)
                result += '1';
            else
                result += '0';

        return result;
    };

    const mixBinaryWordWithHash = (binaryWord, hash) => {
        let result = '';
        for(var i=0; i<binaryWord.length; i++)
            result += ((binaryWord[i] - '0') ^ (hash[i] - '0')); 

        return result;
    };

    const encodeWord = (string) => {
        const binaryWord = wordToBinary(string);
        const hash = generateHash(binaryWord);

        return mixBinaryWordWithHash(binaryWord, hash);
    };

    return encodeWord(string);
}