/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function traverse(node) {
        if (!node) return;
        res.push(node);
        traverse(node.left);
        traverse(node.right);
    }

    let res = [];
    traverse(root); 
    for (let i = 1; i < res.length; i++) {
        const current = res[i - 1];
        const next = res[i];
        current.left = null;  
        current.right = next;
    }
};