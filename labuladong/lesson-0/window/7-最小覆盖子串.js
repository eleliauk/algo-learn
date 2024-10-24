/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let need={},window={};
    for (let c of t) {
        need[c] = (need[c] || 0) + 1;
    }
    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while(right<s.length){
        let c=s[right];
        right++;
        if(need[c]){
            window[c] = (window[c] || 0) + 1;
            if (window[c] === need[c]) {
                valid++;
            }
        }
        while(valid===Object.keys(needs).length)
            {

               // 在这里更新最小覆盖子串
               if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }
    // 返回最小覆盖子串
    return len === Infinity ? "" : s.substring(start, start + len);
};