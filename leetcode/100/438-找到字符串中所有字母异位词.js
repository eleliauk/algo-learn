/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//给定两个字符串 s 和 p，找到 s 中所有 p 的 
//异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
var findAnagrams = function(s, p) {
    let win=new Map()
    let need =new Map()
    let right=0
    let left=0
    let res=[]
    let vaild=0
    for(let c of p){
        need.set(c,(need.get(c)||0)+1)
    }
    while(right<s.length){
        var c=s[right]
        right++
        if(need.get(c)){
            win.set(c,(win.get(c)||0)+1)
            if(need.get(c)===win.get(c)){
                vaild++ 
            }
        }
        while(right-left>=p.length){
            if(vaild===need.size)
                res.push(left)
            var d=s[left]
            left++
            if(need.has(d)){
                if (win.get(d) === need.get(d)) {
                    vaild--;
                }
                win.set(d,(win.get(d)||0)-1)
            }
        }
        
    }
    return res
};