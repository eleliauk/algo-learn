/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let numSet = new Set(nums);
    let maxLength = 0;
    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength
};