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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res=[],queue=[];
    if(!root){
        return res
    }
     queue.push(root)
    while(queue.length>0){
        let cur=[];
        let len=queue.length
        for(let i=0;i<len;i++){
            let node=queue.shift()
            cur.push(node.val)
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        res.push(cur)
    }
    return res
};