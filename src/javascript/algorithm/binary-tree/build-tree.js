/**
 * @description https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

function buildTree(preorder, inorder) {
    const buildTreeHelper = (preorder, pStart, pEnd, inorder, iStart, iEnd, map) => {
        if (pStart === pEnd) {
            return null;
        }
        let root_val = preorder[pStart];
        let root = new TreeNode(root_val);

        let i_root_index = map.get(root_val);
        let leftNum = i_root_index - iStart;
        root.left = buildTreeHelper(preorder, pStart + 1, pStart + leftNum + 1, inorder, iStart, i_root_index, map);
        root.right = buildTreeHelper(preorder, pStart + leftNum + 1, pEnd, inorder, i_root_index + 1, iEnd, map);

        return root;
    };

    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.put(inorder[i], i);
    }

    return buildTreeHelper(preorder, 0, preorder.length, inorder, 0, inorder.length, map);
}