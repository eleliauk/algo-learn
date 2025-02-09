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
var rightSideView = function(root) {
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
            if (node.right)
                queue.push(node.right);
            if (node.left)
                queue.push(node.left);
        }
        res.push(cur[0])
    }
    return res
};