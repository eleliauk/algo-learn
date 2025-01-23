//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引
// 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var right=0;
    var left=nums.length-1;
    var mid;
    while(left>=right){
        mid=Math.floor((right+left)/2);
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]>target){
            left=mid-1;
        }else{
            right=mid+1;
        }
    }
    return right;
};