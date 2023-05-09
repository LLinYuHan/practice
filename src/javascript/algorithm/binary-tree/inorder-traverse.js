/**
 * @file 中序遍历
 * @author linyuhan
 */

var inorderTraversal = function (root) {
    let ans = [];
    let res = [];
    let cur = root;

    while (cur !== null || ans.length) {
        while (cur !== null) {
            ans.push(cur);
            cur = cur.left;
        }
        cur = ans.pop();
        res.push(cur.val);
        cur = cur.right;
    }

    return res;
};