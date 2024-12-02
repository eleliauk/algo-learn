/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 去除空格 
    s=s.trim()
    let arr=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            arr.push(i)
        }
    }
    let str=s.slice(arr[arr.length-1]+1)
    return str.length;
};