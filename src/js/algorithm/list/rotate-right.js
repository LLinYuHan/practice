/**
 * 旋转链表
 * leetcode - 61
 * @param {node} head 
 * @param {number} k 
 * @returns {node} 
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }

    let n = 1;
    let cur = head;
    while (cur) {
        cur = cur.next;
        n++;
    }

    let move = n - k % n;

    if (move === n) {
        return head;
    }

    cur.next = head;

    while (move) {
        cur = cur.next;
        move--;
    }

    const node = move.next;
    move.next = null;

    return node;
};