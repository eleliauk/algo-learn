在双链表中删除一个节点
在双链表中删除节点时，需要调整前驱节点和后继节点的指针来摘除目标节点：
```js
// 删除第 4 个节点
// 先找到第 3 个节点
var p = head;
for (var i = 0; i < 2; i++) {
    p = p.next;
}
// 现在 p 指向第 3 个节点，我们把它后面那个节点摘除出去
var toDelete = p.next;
// 把 toDelete 从链表中摘除
p.next = toDelete.next;
toDelete.next.prev = p;
// 把 toDelete 的前后指针都置为 null 是个好习惯（可选）
toDelete.next = null;
toDelete.prev = null;
```
这段代码的目标是将双向链表中 `p` 节点的下一个节点（`p->next`）摘除，即删除它。让我们一步步解释这段代码：

### 1. 获取要删除的节点
```js
var toDelete = p.next;
```
- 这里 `p` 是指向链表中的某个节点（此处是第三个节点）。
- `p.next` 是指向 `p` 后面的节点，也就是你要删除的节点。
- `toDelete` 保存了 `p.next`，即要从链表中删除的节点。

### 2. 更新 `p` 的 `next` 指针
```js
p.next = toDelete.next;
```
- `p.next` 原本指向 `toDelete`，现在更新为 `toDelete.next`，也就是要删除的节点的下一个节点。
- 通过这一步，`p` 的下一个节点从 `toDelete` 变成了 `toDelete.next`，即跳过了 `toDelete`，从而将它从链表的正向链接中摘除。

### 3. 更新 `toDelete.next` 的 `prev` 指针
```js
toDelete.next.prev = p;
```
- `toDelete.next` 是原本 `toDelete` 的下一个节点。现在要将这个节点的 `prev` 指针更新，使其指向 `p`。
- 这一步的作用是保证链表的双向性，即 `toDelete.next` 的 `prev` 不再指向 `toDelete`，而是指向 `p`，从而将 `toDelete` 从链表的反向链接中摘除。

### 4. 清空 `toDelete` 的指针（可选，作为一个好习惯）
```js
toDelete.next = null;
toDelete.prev = null;
```
- 这一步是可选的，它将 `toDelete` 节点的 `next` 和 `prev` 指针都置为 `null`。这样做的原因是：
  - 防止这些指针意外指向其他节点，从而避免后续可能发生的误操作或内存泄漏。
  - 方便垃圾回收（如果使用的是带有自动内存管理的语言，如 JavaScript），使其更容易回收这段内存。

### 总结：
这段代码完成了以下任务：
1. 找到并保存要删除的节点 `toDelete`。
2. 将 `p.next` 更新为 `toDelete` 的下一个节点，跳过了 `toDelete`。
3. 更新 `toDelete.next` 的 `prev`，使其不再指向 `toDelete`，而是指向 `p`。
4. （可选）清除 `toDelete` 的 `next` 和 `prev` 指针，确保该节点不再与链表的任何其他部分连接。

完成后，`toDelete` 节点被完全从链表中移除，链表的结构依然保持完整。