/**
 * @file 二叉树遍历
 * @author linyuhan
 */

/**
 * 中序遍历
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

/**
 * 层序遍历递归
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const res = [];

    let helper = (res, level, root) => {
        if (!res[level]) {
            res[level] = [];
        }

        res[level].push(root.val);

        if (root.left) {
            helper(res, level + 1, root.left);
        }
        if (root.right) {
            helper(res, level + 1, root.right);
        }
    };

    helper(res, 0, root);
    return res;
}

/**
 * 层序遍历迭代
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const res = [];
    let level = 0;
    while (queue.length) {
        res[level] = [];
        let levelNum = queue.length;
        while (levelNum--) {
            const front = queue.shift();
            res[level].push(front.val);
            if (front.left) {
                queue.push(front.left);
            }
            if (front.right) {
                queue.push(front.right);
            }
        }
        level++;
    }
    return res;
}