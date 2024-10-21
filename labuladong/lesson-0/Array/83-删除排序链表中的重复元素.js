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
var deleteDuplicates = function(head) {
   if(head===null){
    return null
   }
   var slow=head;
   var fast=head;
   while(fast!==null){
    if(fast.val!==slow.val){
        slow.next=fast;
        slow=slow.next
    }
    fast=fast.next
   }
   slow.next=null;
   return head;
}