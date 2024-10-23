/**
 * @param {string} s
 * @return {string}
 */
//不会 等着二进宫吧
var longestPalindrome = function(s) {
    var res = "";
    var palindrome = function(s, l, r) {
        // 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
        // 防止索引越界
        while (l >= 0 && r < s.length
                && s.charAt(l) == s.charAt(r)) {
            // 双指针，向两边展开
            l--; r++;
        }
        // 返回以 s[l] 和 s[r] 为中心的最长回文串
        return s.substring(l + 1, r);
    }
    for (var i = 0; i < s.length; i++) {
        // 以 s[i] 为中心的最长回文子串
        var s1 = palindrome(s, i, i);
        // 以 s[i] 和 s[i+1] 为中心的最长回文子串
        var s2 = palindrome(s, i, i + 1);
        // res = longest(res, s1, s2)
        res = res.length > s1.length ? res : s1;
        res = res.length > s2.length ? res : s2;
    }
    return res;
    
};
