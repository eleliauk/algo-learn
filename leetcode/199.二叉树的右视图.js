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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res=[]
    let path=[]
    path.push(root)
    if(root==null){
        return []
    }
    while(path.length>0){
        let len=path.length
        let cur=[]
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
        res.push(cur[cur.length-1])
    }
    return res
};