/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    var dummy=new ListNode(-1);
    var p=dummy;
    var p1=list1,p2=list2;
    while(p1!=null&&p2!=null){
      if(p1.val>p2.val){
          p.next=p2
          p2=p2.next
      }else{
          p.next=p1
          p1=p1.next
      }
      p=p.next;
    }
        if (p1 !== null) {
          p.next = p1;
      }
  
      if (p2 !== null) {
          p.next = p2;
      }
    return dummy.next
};