
var minWindow = function(s, t) {
    let need = new Map();
    let window = new Map();
    for (let c of t) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Number.MAX_VALUE;

    while (right < s.length) {
        // c 是将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    // 返回最小覆盖子串
    return len === Number.MAX_VALUE ? "" : s.substring(start, start + len);
};