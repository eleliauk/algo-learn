/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var nums = digits.length - 1;
    digits[nums] += 1; 

    while (nums >= 0) {
        if (digits[nums] > 9) { 
            digits[nums] = 0;
            if (nums === 0) { 
                digits.unshift(1);
            } else {
                digits[nums - 1] += 1; 
            }
        }
        nums--;
    }

    return digits;
};