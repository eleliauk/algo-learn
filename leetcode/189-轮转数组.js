/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//i =>i+k-nums.length
var rotate = function(nums, k) {
    function reverse(i,j){
        while(i<j){
            [nums[i],nums[j]]=[nums[j],nums[i]]
            i++
            j--
        }
        
    }
    reverse(0,nums.length-1);
    reverse(0,k);
    reverse(k+1,nums.length-1);
    return nums
    

};