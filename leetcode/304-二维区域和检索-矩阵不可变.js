/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    // preSum[i][j] 记录矩阵 [0, 0, i-1, j-1] 的元素和
    this.preSum = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
    if (m == 0 || n == 0) return;
    // 构造前缀和矩阵
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 计算每个矩阵 [0, 0, i, j] 的元素和
            this.preSum[i][j] = this.preSum[i-1][j] + this.preSum[i][j-1] + matrix[i - 1][j - 1] - this.preSum[i-1][j-1];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.preSum[x2+1][y2+1] - this.preSum[x1][y2+1] - this.preSum[x2+1][y1] + this.preSum[x1][y1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */