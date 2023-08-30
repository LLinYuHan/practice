/**
 * @file 验证回文串
 * @author linyuhan
 */

function isPalindrome(s) {
    // 去除数字，字母以外的符号
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        // 反转链表
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (prev !== null && slow !== null) {
        if (prev.val !== slow.val) {
            return false;
        }

        prev = prev.next;
        slow = slow.next;
    }

    return true;
};