/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // 交替合并链表
    const mergeList = (l1, l2) => {
        while (l1 !== null && l2 !== null) {
            let tmp1 = l1.next;
            let tmp2 = l2.next;

            l1.next = l2;
            l1 = tmp1;

            l2.next = l1;
            l2 = tmp2;
        }
    };

    // 反转链表 - 迭代法
    const reverseList = (head) => {
        if (head == null || head.next == null) {
            return head;
        }
        let newHead = null;
        while (head !== null) {
            let next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }
        return newHead;
    };

    // 寻找中间节点
    // leetcode - 876
    const middleNode = (head) => {
        let slow = head;
        let fast = head;
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };

    if (head === null) {
        return;
    }

    let mid = middleNode(head);
    let l1 = head;
    let l2 = mid.next;
    mid.next = null;
    l2 = reverseList(l2);
    mergeList(l1, l2);
};