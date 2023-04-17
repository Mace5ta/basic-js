//const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    //throw new NotImplementedError('Not implemented');
    if (typeof sampleActivity !== "string") return false;

    const sampleActivityNumber = +sampleActivity;
    const t = 0.693 / HALF_LIFE_PERIOD;
    const kN0toN = Math.log(MODERN_ACTIVITY / sampleActivityNumber);

    if (Math.ceil(kN0toN / t) <= 0) return false;

    if (sampleActivityNumber > 0 && sampleActivityNumber <= MODERN_ACTIVITY) {
        return Math.ceil(kN0toN / t);
    } else {
        return false;
    }
}

dateSample('WOOT!')

module.exports = {
    dateSample
};
