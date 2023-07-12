/**
 * @file 二叉树遍历
 * @author linyuhan
 */


/**
 * 前序遍历
 */

var preorderTraversal = function (root) {
    let ans = [];
    let res = [];
    let cur = root;

    while (cur !== null || ans.length) {
        while (cur !== null) {
            res.push(cur.val);
            ans.push(cur);
            cur = cur.left;
        }
        cur = ans.pop();
        cur = cur.right;
    }
    return res;
};

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
 * 后序遍历
 */
var postorderTraversal = function (root) {
    let ans = [];
    let res = [];
    let cur = root;
    let prev = null;

    while (cur !== null || ans.length) {
        while (cur !== null) {
            ans.push(cur);
            cur = cur.left;
        }
        cur = ans.pop();
        if (cur.right == null || cur.right === prev) {
            res.push(cur.val);
            prev = cur;
            cur = null;
        }
        else {
            ans.push(cur);
            cur = cur.right;
        }
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

/**
 * N 字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows < 2) return s;
    let ans = [];
    let i = 0, flag = -1;
    for (let element of s) {
        ans[i] = ans[i] ? ans[i] += element : element;
        if (i === 0 || i === numRows - 1) {
            flag = -flag;
        }
        i += flag;
    }

    return ans.join('');
};