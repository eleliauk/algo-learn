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
    let slow=fast=head;
    while(fast!=null&&fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
        if(slow==fast)
            break;
    }
    if(fast==null||fast.next==null){
        return null
    }
    slow=head;
    while(slow!==fast){
        fast=fast.next;
        slow=slow.next;
    }
    return slow;
};