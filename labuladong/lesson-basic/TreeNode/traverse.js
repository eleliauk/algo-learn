//递归遍历（DFS）
// 基本的二叉树节点
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// 二叉树的遍历框架
var traverse = function(root) {
    if (root === null) {
        return;
    }
    traverse(root.left);
    traverse(root.right);
}
// 递归遍历的顺序，即 traverse 函数访问节点的顺序确实是固定的。
// 正如上面那个可视化面板，root 指针在树上移动的顺序是固定的。

// 但是你在 traverse 函数中不同位置写代码，效果是可以不一样的。
// 前中后序遍历的结果不同，原因是因为你把代码写在了不同位置，所以产生了不同的效果。