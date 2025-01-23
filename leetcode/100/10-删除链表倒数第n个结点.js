/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 创建一个哑节点（dummy），指向 head
    var dummy = new ListNode(0, head);
    let right = dummy, left = dummy;
    
    // 将 right 指针向前移动 n 步
    for (let i = 0; i < n; i++) {
        right = right.next;
    }

    // 同时移动 left 和 right，直到 right 到达链表末尾
    while (right.next !== null) {
        left = left.next;
        right = right.next;
    }

    // 删除倒数第 n 个节点
    left.next = left.next.next;

    // 返回新的链表头部
    return dummy.next;
};