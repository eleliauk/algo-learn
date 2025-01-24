/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        // 如果 pA 到达链表末尾，则转向 headB
        pA = pA === null ? headB : pA.next;
        // 如果 pB 到达链表末尾，则转向 headA
        pB = pB === null ? headA : pB.next;
    }

    // 两指针相遇时，可能是交点，也可能都是 null
    return pA;
};