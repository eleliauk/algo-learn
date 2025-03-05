
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
//每行的元素从左到右升序排列。
//每列的元素从上到下升序排列。
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let i = 0, j = n - 1; // 从右上角开始

    while (i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            j--; // 当前值比目标值大，往左移动
        } else {
            i++; // 当前值比目标值小，往下移动
        }
    }
    return false;
};