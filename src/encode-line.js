//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    //throw new NotImplementedError('Not implemented');
    const arrFromStr = str.split("");
    let count = 1;
    const resultArr = [];

    for (let i = 0; i < arrFromStr.length; i++) {
        if (arrFromStr[i] !== arrFromStr[i + 1]) {
            resultArr.push(count === 1 ? arrFromStr[i] : `${count}${arrFromStr[i]}`);
            count = 1;
        } else {
            count++;
        }
    }
    return resultArr.join("");
}

module.exports = {
    encodeLine
};
