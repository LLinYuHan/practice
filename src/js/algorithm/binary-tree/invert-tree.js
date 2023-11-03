/**
 * 翻转二叉树
 * @param {TreeNode} root 
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root === null) {
        return root;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};