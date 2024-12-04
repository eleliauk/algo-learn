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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null)
        return root;
    var traverse=function (root){
        if(root==null)
            return ;
        var temp=root.right;
        root.right=root.left;
        root.left=temp;
    }
    traverse(root)
    traverse(root.right)
    traverse(root.left)
    return root
};