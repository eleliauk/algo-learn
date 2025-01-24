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
var levelOrderBottom = function(root) {
    let res=[]
    let queue=[]
    queue.push(root)
    if(root===null){
        return res
    }
    while(queue.length!=0){
        let cur=[]
        let length=queue.length
        for(let i=0;i<length;i++){
            let node=queue.shift()
            cur.push(node.val)
            node.left&&queue.push(node.left)
            node.right&&queue.push(node.right)
        }
        res.push(cur)
    }
    return res.reverse()
};
