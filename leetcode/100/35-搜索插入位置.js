/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length === 0) return -1;
    let right=nums.length;
    let left=0;
    while(left<right){
        mid=Math.floor((right+left)/2)
        if(nums[mid]==target){
            return mid
        }else if(nums[mid]<target){
            left=mid+1
        }else{
            right=mid
        }
    }
    return left
};