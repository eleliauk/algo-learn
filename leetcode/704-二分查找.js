/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // 计算中间值，并向下取整
        let mid = Math.floor((right + left) / 2);

        if (nums[mid] === target) {
            return mid; // 找到目标值，返回索引
        } else if (nums[mid] < target) {
            left = mid + 1; // 更新左边界
        } else {
            right = mid - 1; // 更新右边界
        }
    }

    return -1; // 未找到目标值
};