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
    const dummy = new ListNode(0, head)
    let slow = dummy, fast = dummy
    // 快指针 手动 比慢指针多走一步
    while (n >= 0) {
        n--
        fast = fast.next
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    //判断节点数是不是偶数
    //这种做法 如果链表长度为偶数 返回的节点是靠后的那个节点。
    if(fast==null){
        return slow
    }else{
        return slow.next
    }
};
removeNthFromEnd([1,2,3,4,5],2);