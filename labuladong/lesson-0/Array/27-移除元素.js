/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var moveZeroes = function(nums) {
    var slow=0,fast=0;
    while(fast<nums.length){
        if(nums[fast]!=0){
            nums[slow]=nums[fast];
            slow++
    }
    fast++;
    }

};