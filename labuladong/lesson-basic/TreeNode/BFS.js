//借助队列来实现
// 在数组开头添加一个元素
// 不常用，因为算法中都尽量避免在数组的非末尾位置增删元素
// arr.unshift(0);
// 删除数组开头的元素
// 不常用，因为算法中都尽量避免在数组的非末尾位置增删元素
// arr.shift();
var levelOrderTraverse1 = function(root) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    while (q.length !== 0) {
        var cur = q.shift();
        // 访问 cur 节点
        console.log(cur.val);

        // 把 cur 的左右子节点加入队列
        if (cur.left !== null) {
            q.push(cur.left);
        }
        if (cur.right !== null) {
            q.push(cur.right);
        }
    }
}
var levelOrderTraverse2 = function(root) {
    if (root === null) {
        return;
    }
    var q = [];
    q.push(root);
    // 记录当前遍历到的层数（根节点视为第 1 层）
    var depth = 1;

    while (q.length !== 0) {
        var sz = q.length;
        for (var i = 0; i < sz; i++) {
            var cur = q.shift();
            // 访问 cur 节点，同时知道它所在的层数
            console.log("depth = " + depth + ", val = " + cur.val);

            // 把 cur 的左右子节点加入队列
            if (cur.left !== null) {
                q.push(cur.left);
            }
            if (cur.right !== null) {
                q.push(cur.right);
            }
        }
        depth++;
    }
};
//写法3

function State(node, depth) {
    this.node = node;
    this.depth = depth;
}

var levelOrderTraverse3 = function(root) {
    if (root === null) {
        return;
    }
    // @visualize bfs
    var q = [];
    // 根节点的路径权重和是 1
    q.push(new State(root, 1));

    while (q.length !== 0) {
        var cur = q.shift();
        // 访问 cur 节点，同时知道它的路径权重和
        console.log("depth = " + cur.depth + ", val = " + cur.node.val);

        // 把 cur 的左右子节点加入队列
        if (cur.node.left !== null) {
            q.push(new State(cur.node.left, cur.depth + 1));
        }
        if (cur.node.right !== null) {
            q.push(new State(cur.node.right, cur.depth + 1));
        }
    }
};
  