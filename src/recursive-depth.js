//const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        //throw new NotImplementedError('Not implemented');
        let depth = 1;
        let resultDepth = 1;

        for (let item of arr) {
            if (Array.isArray(item)) {
                depth = depth + this.calculateDepth(item);
                resultDepth = Math.max(depth, resultDepth);
                depth = 1;
            }
        }

        return resultDepth;
    }
}

module.exports = {
    DepthCalculator
};
