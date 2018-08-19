exports.validator = function(options) {
    var response = (response, error) => {
        return {
            response,
            error
        }
    };

    const validateOptions = (options) => {
        const algorithms = options.algorithms;
        const value = options.value;

        if(!algorithms) 
            return response(null, 'There are not any algorithm.');
        if(!value) 
            return response(null, 'There are not a value to convert.');

        if(!(algorithms instanceof Array))
            return response(null, 'Algorithms are not array.');
        if(!(typeof value === 'string'))
            return response(null, 'Value is not a string.');

        return response('success', null);
    };

    return validateOptions(options);
}