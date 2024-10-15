/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    //da
   let dummy1=new ListNode(-1);
   //xiao
   let dummy2=new ListNode(-1);
   let p=head;
   let p1=dummy1,p2=dummy2;
   while(p!==null){
    if(p.val>=x){
        p1.next=p;
        p1=p1.next;
    }else{
        p2.next=p;
        p2=p2.next;
    }
    let temp=p.next;
    p.next=null;
    p=p.next
   }
   p2.next = dummy1.next;
   return dummy2.next
};
