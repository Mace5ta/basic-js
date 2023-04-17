//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    //throw new NotImplementedError('Not implemented');
    if (typeof str !== "string") str = String(str);
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

    options.addition !== undefined ? options.addition = String(options.addition) : options.addition = "";
    options.separator ? options.separator = String(options.separator) : options.separator = "+";
    options.additionSeparator ? options.additionSeparator = String(options.additionSeparator) : options.additionSeparator = "|";


    const additionPart = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)

    const additionString = additionPart.slice(0, additionPart.length - options.additionSeparator.length);

    const resultArr = [];

    for (let i = 0; i < options.repeatTimes; i++) {
        resultArr.push(str + additionString);
    }

    return resultArr.join(options.separator);
}

module.exports = {
    repeater
};
