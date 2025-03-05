/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//TODO 二进宫
var reverseKGroup = function(head, k) {
    if(head===null) return null
    let a,b
    a=b=head
    for(let i=0;i<k;i++){
        if(a.next===null){
            return head
        }
      a=a.next
    }
    let newHead=reverse(a,b)
    a.next = reverseKGroup(b, k);
    return newHead
    

};
function reverse(a, b) {
    let pre, cur, nxt;
    pre = null;
    cur = a;
    nxt = a;
    while (cur !== b) {
        nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    return pre;
}