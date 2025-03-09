//给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let win=new Map()
    let left=0
    let right=0
    let res=0
    while(right<s.length){
        let c=s.charAt(right)
        right++
        win.set(c,(win.get(c)||0)+1)
        while(win.get(c)>1){
            let d=s.charAt(left)
            win.set(d,win.get(d)-1)
            left++
        }
        res=Math.max(right-left,res)
    }
    return res
};