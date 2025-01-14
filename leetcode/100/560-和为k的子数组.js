/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum=0;
    nums.sort()
    let k=1;
    let slow=0;
    let fast=nums.length-1;
    while(k<nums.length){
        //1个数的时候
        if(nums[fast]>k)
        {
            while(fast>0){
                if(nums[fast]==nums){
                    sum+=1
                }
            }
        }
        
        k++

    }
};