/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。 1 2 3 4 5 
var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // 检查是否存在与当前数匹配的另一个数
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // 将当前数及其索引存入哈希表
        map.set(nums[i], i);
    }
    
    // 如果没有找到符合条件的数对，返回空数组
    return [];
};