/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let arr=[]
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            arr.push(matrix[i][j])
        }
    }
    arr.sort((a,b)=>a-b)
    let right=arr.length-1
    let left=0
    while(left<=right){
        let mid=Math.floor((right+left)/2)
        if(arr[mid]<target){
            left=mid+1
        }
        if(arr[mid]>target){
            right=mid-1
        }
        if(arr[mid]===target){
            return true
        }
    }
    return false
};