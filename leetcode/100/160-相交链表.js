/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//要写第二次的题
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
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
    var p1=headA;
    var p2=headB;
    var set=new Set();
    while(p1!=null){
        set.add(p1)
        p1=p1.next;
    }
    while(p2!=null){
        if(set.has(p2)){
            return p2
        }
        p2=p2.next
    }
    return null;
};
