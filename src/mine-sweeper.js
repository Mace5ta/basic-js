//const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    //throw new NotImplementedError('Not implemented');
    const resultArr = Array.from(Array(matrix.length), () => new Array(matrix[0].length));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let count = 0;
            const diagTopLeftEl = (i, j) => matrix[i - 1][j - 1];
            const diagTopRightEl = (i, j) => matrix[i - 1][j + 1];

            const diagBottomLeftEl = (i, j) => matrix[i + 1][j - 1];
            const diagBottomRightEl = (i, j) => matrix[i + 1][j + 1];

            const topEl = (i, j) => matrix[i - 1][j];
            const bottomEl = (i, j) => matrix[i + 1][j];
            const leftEl = (i, j) => matrix[i][j - 1];
            const rightEl = (i, j) => matrix[i][j + 1];

            if (i > 0) {
                if (j > 0 && diagTopLeftEl(i, j)) count++;
                if (topEl(i, j)) count++;
                if (j <= matrix[0].length && diagTopRightEl(i, j)) count++;
                if (j <= matrix[0].length - 1 && rightEl(i, j)) count++;
            }
            if (j > 0) {
                if (leftEl(i, j)) count++;
                if (i < matrix.length - 1 && diagBottomLeftEl(i, j)) count++;
                if (i < matrix.length - 1 && bottomEl(i, j)) count++;
            }
            if (i < matrix.length - 1) {
                if (j < matrix[0].length - 1 && diagBottomRightEl(i, j)) count++
            }

            resultArr[i][j] = count
        }
    }
    return resultArr;
}

// matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
// ]
//
// console.log(minesweeper(matrix))

module.exports = {
    minesweeper
};
