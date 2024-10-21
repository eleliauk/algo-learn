/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var right=0;
    var left=s.length-1;
    while(right<left){
        var temp=s[left];
        s[left]=s[right];
        s[right]=temp;
        left--;
        right++;
    }
    return s;
};