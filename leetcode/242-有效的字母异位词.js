/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)
        return false
    let arr1=new Array(26).fill(0)
    let arr2=new Array(26).fill(0)
    const base='a'.charCodeAt()
    for(let i=0;i<s.length;i++){
        arr1[s[i].charCodeAt()-base]++
        arr2[t[i].charCodeAt()-base]++
    }
    console.log(arr1)
    console.log(arr2)
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

};