/**
 * @file 二叉搜索树第 k 个节点
 * @author linyuhan
 */

function kthLargest(root, k) {
    let res;
    const dfs = root => {
        if (!root || k === 0) {
            return;
        }
        dfs(root.right);
        if (--k === 0) {
            res = root.val;
        }
        dfs(root.left);
    };
    dfs(root);
    return res;
}

function kthSmallest(root, k) {
    let res;
    const dfs = root => {
        if (!root || k === 0) {
            return;
        }
        dfs(root.left);
        if (--k === 0) {
            res = root.val;
        } 
        dfs(root.right);
    };
    dfs(root);
    return res;
}