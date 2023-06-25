/**
 * @file flatten 二叉树展开为链表
 * @author linyuhan
 * @description https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/
 */

function flatten(root) {
    const list = [];
    const stack = [];
    let cur = root;
    while (cur !== null || stack.length) {
        while (cur !== null) {
            list.push(cur);
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        cur = cur.right;
    }
    for (let i = 1, len = list.length; i < len; i++) {
        const prev = list[i - 1], cur = list[i];
        prev.right = cur;
        prev.left = null;
    }

    return list;
}