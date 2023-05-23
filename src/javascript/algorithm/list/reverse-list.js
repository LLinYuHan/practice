/**
 * @file 反转链表
 * @author linyuhan
 */

/**
 * 递归方法
 * 1. 终止条件 head 为 null 或 head 的 next 节点为 null
 * 2. 逐步断开 head 和 next 的联系
 * 3. 递归调用，使链表越来越短
 * 4. 将 next.next = head 反转链表指向
 * 5. 返回新的 head
 */
function reverseList(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let next = head.next;
    head.next = null;

    let newHead = reverseList(next);
    next.next = head;
    return newHead;
}

/**
 * 迭代方法
 * 1. 边界条件 head 为 null 或 head 的 next 节点为 null
 * 2. 循环切断联系再链接
 * 3. 返回新的 head
 */
function reverseList(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newHead = null;
    while (head != null) {
        let next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
}

/**
 * 反转链表 II
 */
var reverseBetween = function (head, left, right) {
    const dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let pre = dummyNode;

    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    let rightNode = pre;
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let curr = rightNode.next;

    pre.next = null;
    rightNode.next = null;

    let reverse = (head) => {
        if (head == null || head.next == null) {
            return head;
        }

        let next = head.next;
        head.next = null;

        let newHead = reverse(next);
        next.next = head;
        return newHead;
    }

    let newHead = reverse(leftNode);

    pre.next = newHead;
    leftNode.next = curr;

    return dummyNode.next;
};