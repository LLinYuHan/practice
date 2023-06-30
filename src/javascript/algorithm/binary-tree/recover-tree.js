/**
 * @description https://leetcode.cn/problems/recover-binary-search-tree/
 */

function recoverTree(root) {
    const swap = (x, y) => {
        const temp = x.val;
        x.val = y.val;
        y.val = temp;  
    };

    const stack = [];
    let x = null, y = null, pred = null;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        
        if (pred !== null && root.val < pred.val) {
            y = root;
            if (x === null) {
                x = pred;
            }
            else {
                break;
            }
        }
        pred = root;
        root = root.right;
    }
    swap(x, y);
}