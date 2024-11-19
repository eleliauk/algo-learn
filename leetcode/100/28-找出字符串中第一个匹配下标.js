/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length;i++){
        for(let j=0;j<needle.length;j++){
           if(haystack[i]!==needle[j]){
               break;
           }
           if(j===needle.length-1){
               return i-needle.length+1;
           }
        }
       }
       return -1;
};
strStr("sadbutsad","sad")