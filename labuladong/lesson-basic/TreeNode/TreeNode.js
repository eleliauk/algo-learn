var TreeNode=function(x){
    this.val = x;
    this.left = null;
    this.right = null;
}
var root=new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.right.left = new TreeNode(5);
// root.right.right = new TreeNode(6);
root.left=new TreeNode(2);
root.right=new TreeNode(3);
root.left.right=new TreeNode(4);
root.right.right=new TreeNode(6);
root.right.left=new TreeNode(5);
// 构建出来的二叉树是这样的：
//     1
//    / \
//   2   3
//  /   / \
// 4   5   6
//这个二叉树还可以用哈希表实现
// 1 -> [2, 3]
// 2 -> [4]
// 3 -> [5, 6]
let tree = new Map([
    [1, [2, 3]],
    [2, [4]],
    [3, [5, 6]]
]);