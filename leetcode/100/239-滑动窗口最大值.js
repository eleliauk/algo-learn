
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//能过 超时了 用队列实现
var maxSlidingWindow = function(nums, k) {
    let left=0
    let res=[]
    function getMax(arr){
        arr.sort((a,b)=>a-b)
        return arr[arr.length-1]
    }
    while(left+k<=nums.length){
        res.push(getMax(nums.slice(left,left+k)))
        left++
    }
    return res
};