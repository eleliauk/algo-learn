/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let answer = [];
    // -1 -2 -3 -4 -5 6 7 
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  
        
        let slow = i + 1;
        let fast = nums.length - 1;
        
        while (slow < fast) {
            let sum = nums[i] + nums[slow] + nums[fast];
            
            if (sum === 0) {
                answer.push([nums[i], nums[slow], nums[fast]]);
                while (slow < fast && nums[slow] === nums[slow + 1]) slow++;
                while (slow < fast && nums[fast] === nums[fast - 1]) fast--;
                slow++;
                fast--;
            } else if (sum < 0) {
                slow++; 
            } else {
                fast--;
            }
        }
    }
    
    return answer;
};