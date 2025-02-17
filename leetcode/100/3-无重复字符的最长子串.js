/**
 * @param {string} s
 * @return {number}
 */
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。
var lengthOfLongestSubstring = function(s) {
    let win=new Map()
    let left=0;
    let right=0
    let res=0
    while(right<s.length){
        var c=s[right]
        right++
        win.set(c,(win.get(c)||0)+1)
        while(win.get(c)>1){
            let t=s[left]
            left++
            win.set(t,(win.get(t)||0)-1)
        }
        res=Math.max(res,right-left)
    }
    //console.log()
    return res
};