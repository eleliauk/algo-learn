/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let preSum=new Array(nums.length+1).fill(0)
    preSum[0]=0
    for(let i=1;i<preSum.length;i++){
        preSum[i]=preSum[i-1]+nums[i-1]
    }
    let res=(preSum[k]-preSum[0])/k
    for(let j=0;j+k<preSum.length;j++){
        let cur=(preSum[j+k]-preSum[j])/k
        res=Math.max(cur,res)
    }
    return res
};