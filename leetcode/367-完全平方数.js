/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 1;
    var right = num;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};