/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[]
    let path=[]
    let used = Array(nums.length).fill(false);
    function back(nums,path,used){
        if(path.length===nums.length){
            res.push([...res])
        }
        for(let i=0;i<nums.length;i++){
            if (used[i]) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            back(nums, path, used);
            path.pop();
            used[i] = false;
        } 
    }
    back(nums,path,used)
    return res
};