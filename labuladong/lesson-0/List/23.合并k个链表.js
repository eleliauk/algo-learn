/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    // 虚拟头结点
    var dummy = new ListNode(-1);
    var p = dummy;

    // 优先级队列，最小堆
    var pq = new MinPriorityQueue({ priority: (node) => node.val });
    
    // 将 k 个链表的头结点加入最小堆
    for (var i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            pq.enqueue(lists[i]);
        }
    }

    while (!pq.isEmpty()) {
        // 获取最小节点，接到结果链表中
        var node = pq.dequeue().element;
        p.next = node;
        if (node.next !== null) {
            pq.enqueue(node.next);
        }
        // p 指针不断前进
        p = p.next;
    }
    
    return dummy.next;
}