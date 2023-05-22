/**
 * @file 合并两个排序链表
 * @author linyuhan
 */

/**
 * 递归
 */
function merge(list1, list2) {
    if (list1 == null) {
        return list2;
    }

    if (list2 == null) {
        return list1;
    }

    if (list1.val <= list2.val) {
        list1.next = merge(list1.next, list2);
        return list1;
    }
    else {
        list2.next = merge(list1, list2.next);
        return list2;
    }
}

/**
 * 迭代
 */
function merge(list1, list2) {
    let head = new ListNode(-1);
    let cur = head;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        }
        else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if (list1) {
        cur.next = list1;
    }
    if (list2) {
        cur.next = list2;
    }
    return head.next;
}