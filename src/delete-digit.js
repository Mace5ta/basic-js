//const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    //throw new NotImplementedError('Not implemented');
    const arrFromN = n.toString().split("");
    let maxNumber = +arrFromN[0];

    for (let i = 0; i < arrFromN.length; i++) {
        let arrTemp = arrFromN.concat();
        arrTemp.splice(i, 1);

        if (maxNumber < +arrTemp.join("")) maxNumber = +arrTemp.join("");
    }
    return maxNumber;
}

module.exports = {
    deleteDigit
};
