/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let first = head;
    let second = head.next;
    let others = head.next.next;
    // 先把前两个元素翻转
    second.next = first;
    // 利用递归定义，将剩下的链表节点两两翻转，接到后面
    first.next = swapPairs(others);
    // 现在整个链表都成功翻转了，返回新的头结点
    return second;
};