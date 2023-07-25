/**
 * 删除链表元素 - 递归
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // 终止条件
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    // 回溯的时候，判断值是否相同，相同则返回下一个节点（删除当前节点）
    return head.val === val ? head.next : head;
};

/**
 * 删除链表元素 - 迭代
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    const dummyNode = new ListNode(0);
    dummyNode.next = head;
    let temp = dummyNode;
    while (temp.next !== null) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        }
        else {
            temp = temp.next;
        }
    }
    return dummyNode.next;
};