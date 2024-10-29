/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let codeToGroup = new Map();
    for (let s of strs) {
        let code = encode(s);
        if (!codeToGroup.has(code)) {
            codeToGroup.set(code, []);
        }
        codeToGroup.get(code).push(s);
    }

    // res
    let res = [];
    for (let group of codeToGroup.values()) {
        res.push(group);
    }

    return res;
};
function encode(s) {
    let count = new Array(26).fill(0);
    for (let c of s) {
        let delta = c.charCodeAt() - 'a'.charCodeAt();
        count[delta]++;
    }
    console.log(count.toString())
    return count.toString();
}
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
