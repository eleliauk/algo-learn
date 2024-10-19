/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var getIntersectionNode = function(headA, headB) {
    if (headA == null || headB == null) {
        return null;
    }

    let p1 = headA;
    let p2 = headB;
    let set = new Set();
    while (p1 !== null) {
        set.add(p1);
        p1 = p1.next;
    }
    while (p2 !== null) {
        if (set.has(p2)) {
            return p2; 
        }
        p2 = p2.next;
    }

    return null;
};