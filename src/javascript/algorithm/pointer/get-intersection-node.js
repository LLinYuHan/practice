/**
 * 获取相交链表的相交节点
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode}
 */
function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}