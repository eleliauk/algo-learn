/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow=fast=head
    while(fast!==null&&fast.next!==null){
        slow=slow.next
        fast=fast.next.next
          if(slow===fast){
            break;
        }
    }
    if (fast == null || fast.next == null) {
        return null;
    }
    slow=head
    while(fast!==slow){
        slow=slow.next
        fast=fast.next
    }
    return slow
};