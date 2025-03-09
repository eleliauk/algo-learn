/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const end = nums[nums.length - 1];
    function check(i) {
        const x = nums[i];
        if (x > end) {
            return target > end && x >= target;
        }
        return target > end || x >= target;
    }

    let left = -1, right = nums.length - 1; // 开区间 (-1, n-1)
    while (left + 1 < right) { // 开区间不为空
        const mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return nums[right] === target ? right : -1;
};