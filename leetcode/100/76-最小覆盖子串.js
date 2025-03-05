//给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
// 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let right = 0;
    let need = new Map();
    let win = new Map();
    let vaild = 0;
    let res = [Infinity, 0, 0];
    for (let c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    
    while (right < s.length) {
        let c = s[right];
        right++;
        
        if (need.has(c)) {
            win.set(c, (win.get(c) || 0) + 1);
            if (win.get(c) === need.get(c)) {
                vaild++;
            }
        }
        while (vaild === need.size) {
            if (right - left < res[0]) {
                res = [right - left, left, right];
            }
            
            let t = s[left];
            left++;
            
            if (need.has(t)) {
                win.set(t, win.get(t) - 1);
                if (win.get(t) < need.get(t)) {
                    vaild--;
                }
            }
        }
    }
    
    return res[0] === Infinity ? "" : s.slice(res[1], res[2]);
};