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
    var dummy=new ListNode(0,head);
    let left=dummy,right=dummy;
    while(n--)
    {
        right=right.next;
    }
    while(right.next){
        right=right.next;
        left=left.next
    }
    left.next=left.next.next;
    return dummy.next
};