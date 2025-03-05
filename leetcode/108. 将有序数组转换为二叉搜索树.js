/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   let len=nums.length
   if(len<=2){
    return nums
   }
   let mid=nums/2
   let left=0
   let right=len-1
   let tree=new TreeNode(nums[mid])
   let treeLeft=tree.left=nums[left]
   let treeRight=tree.right=nums[right]
   left++
   right--
   while(right!==left){
        treeLeft.right=nums[left++]
        treeLeft=treeLeft.right
        treeRight.left=nums[left++]
        treeRight=treeRight.left
   }
   return mid
};
var sortedArrayToBST = function(nums) {
    // 把 nums[left] 到 nums[right-1] 转成平衡二叉搜索树
    function dfs(left, right) {
        if (left === right) {
            return null;
        }
        const m = Math.floor((left + right) / 2);
        return new TreeNode(nums[m], dfs(left, m), dfs(m + 1, right));
    }
    return dfs(0, nums.length);
};
