/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res=0
    let rank=0
    function travese(root){
        if(root===null){
            return ;
        }
        travese(root.left)
        rank++;
        if (k === rank) {
            res = root.val;
            return;
        }
        travese(root.right)
    }
    travese(root)
    return res
};