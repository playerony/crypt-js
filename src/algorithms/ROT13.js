exports.ROT13 = function(string) {
    var add = 13;

    var encodeWord = (string) => {
        var result = '';
        for(var i=0; i<string.length; i++)
            result += String.fromCharCode(string.charCodeAt(i) + add);

        return result;
    };

    return encodeWord(string);
}