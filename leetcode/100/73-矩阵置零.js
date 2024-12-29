/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let num=[]
    let row=new Array(matrix.length).fill(false)
    let col=new Array(matrix[0].length).fill(false)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                row[i]=true;
                col[j]=true
            }
        }
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(row[i]||col[j]){
                matrix[i][j]=0
            }
        }
    }
   // return matrix
};