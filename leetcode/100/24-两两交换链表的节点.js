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
    let ret = new ListNode(0, head), temp = ret;
    while(temp.next&&temp.next.next){
        let pre=temp.next;
        let cur=temp.next.next;
        pre.next=cur.next;
        cur.next=pre;
        temp.next=cur;
        temp=temp.next.next
    }
    return head;
};