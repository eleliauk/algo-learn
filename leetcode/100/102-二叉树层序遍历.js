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
    let res=[]
    let path=[]
    if(root===null){
        return res
    }
    path.push(root)
    while(path.length!==0){
        let cur=[]
        let len=path.length
        for(let i=0;i<len;i++){
            let node=path.shift()
            cur.push(node.val)

            if(node.left){
                path.push(node.left)
            }
            if(node.right){
                path.push(node.right)
            }
        }
       res.push(cur)
    }
    return res
};