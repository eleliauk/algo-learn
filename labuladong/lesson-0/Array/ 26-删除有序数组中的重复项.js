/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===0){
        return 0;
    }
    var slow=0 ,fast=0;
    while(fast<nums.length){
        if(nums[fast]!=nums[slow]){
            slow++
            nums[slow]=nums[fast];
        }
        fast++
    }
    return slow
};