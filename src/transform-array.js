//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    //throw new NotImplementedError('Not implemented');
    const commands = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
    if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`)
    }
    const result = arr.concat();
    for (let i = 0; i < result.length; i++) {
        if (i !== 0 && result[i] === commands[1]) {
            result.splice(i - 1, 1)
        }
        if (i + 1 !== result.length && result[i] === commands[0]) {
            result.splice(i + 1, 1)
        }
        if (i !== 0 && typeof result[i - 1] === "number" && result[i] === commands[3]) {
            result.splice(i, 1, result[i - 1])
        }
        if (i + 1 !== result.length && result[i] === commands[2]) {
            result.splice(i + 1, 0, result[i + 1])
        }
    }

    return result.filter(item => !commands.includes(item));
}

module.exports = {
    transform
};
