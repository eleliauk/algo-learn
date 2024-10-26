/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res=[];
    var solveQueens=function(n){
        let board=[]
        for(let i=0;i<n;i++){
            board.push('.'.repeat(n))
        }
        backtrack(board,0);
        return res;
    }
        var backtrack=function(board, row){
            // 触发结束条件
        if (row === board.length) {
            res.push([...board]);
            return;
            }
        let n=board[row].length;
        }
    
};