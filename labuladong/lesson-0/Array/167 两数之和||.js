/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var right=0;
    var left=numbers.length-1;
    while(right<left){
        var sum=numbers[right]+numbers[left]
        if(sum==target){
            return [right+1,left+1]
        }else if(sum<target){
            right++
        }else if(sum>target){
            left--
        }
    }
    return [];
};