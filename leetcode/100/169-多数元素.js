/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(count===0){
            res=nums[i];
        }else if (nums[i] === res) {
            // 如果遇到的是目标众数，计数器累加
            count++;
        } else {
            // 如果遇到的不是目标众数，计数器递减
            count--;
        }
    }
    return res;
};