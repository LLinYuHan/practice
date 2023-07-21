/**
 * @file 反转链表
 * @author linyuhan
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

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

var reverseKGroup = function (head, k) {
    let myReverse = (head, tail) => {
        let pre = tail.next;
        let p = head;
        while (pre !== tail) {
            const next = p.next;
            p.next = pre;
            pre = p;
            p = next;
        }
        return [tail, head];
    };

    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const next = tail.next;
        [head, tail] = myReverse(head, tail);
        pre.next = head;
        tail.next = next;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};

var rotate = function (matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
};

var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};

/**
 * 反转字符串
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let len = s.length;

    const arr = Array.from(s);

    const reverse = (arr, left, right) => {
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    };

    for (let i = 0; i < len; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, len) - 1);
    }

    return arr.join('');
};

