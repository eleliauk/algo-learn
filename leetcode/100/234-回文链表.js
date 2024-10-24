/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //反转
    var reverse=function(head){
        var pre=null,cur=head;
        while(cur!=null){
            const next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next
        }
        return pre;
    }
    var slow=head,fast=head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast!=null){
        slow=slow.next;
    }
    let left=head;
    let right=reverse(slow);
    while(right!=null){
        if(right.val!==left.val){
            return false
        }
        right=right.next;
        left=left.next;
    }
    return true
};