/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let res = [];
    
    for (let i = 0; i < num.length; i++) {
        // 移除栈中比当前数字大的元素，保证栈里的元素是递增的
        while (k > 0 && res.length > 0 && res[res.length - 1] > num[i]) {
            res.pop();
            k--;
        }
        res.push(num[i]);
    }
    while (k > 0) {
        res.pop();
        k--;
    }

    let result = res.join('').replace(/^0+/, '');
    return result.length === 0 ? '0' : result;
};