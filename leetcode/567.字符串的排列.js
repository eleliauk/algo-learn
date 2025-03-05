// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的 排列。如果是，
// 返回 true ；否则，返回 false 。
// 换句话说，s1 的排列之一是 s2 的 子串 。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let window=new Map()
    let need=new Map()
    let left=0,right=0
    for(const t of s1){
        need.set(t,(need.get(t)||0)+1)
    }
    let valid=0
    while(right<s2.length){
        let c = s2.charAt(right);
        right++
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        while(right-left>=s1.length){
            if (valid === need.size) {
                return true;
            }
            let t=s2.charAt(left)
            left++
            if(need.has(t)){
                if (window.get(t) === need.get(t)) {
                    valid--;
                }
                window.set(t,(window.get(t)||0)-1)
            }
        }
    }
    return false
};   