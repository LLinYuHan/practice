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