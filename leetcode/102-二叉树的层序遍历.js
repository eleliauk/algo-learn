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
    queue.push(root)
    if(root===null){
        return res
    }
    while(queue.length!==0){
        let length = queue.length;
        //放每一层的节点
        let cur=[];
        //   1
        //  / \
        // 2   3
        for(let i = 0;i < length; i++) {
            let node = queue.shift();
            curLevel.push(node.val);
            // 存放当前层下一层的节点
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(cur)
    }
    return res
};