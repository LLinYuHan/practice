/**
 * 二叉树的所有路径
 * leetcode - 257
 * @param {TreeNode} root 
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res =  [];
    const getPath = (node, curPath) => {
        if (node.left === null && node.right === null) {
            curPath += node.val;
            res.push(curPath);
            return;
        }
        curPath += node.val + '->';
        node.left && getPath(node.left, curPath);
        node.right && getPath(node.right, curPath);
    };
    getPath(root, '');
    return res;
};

/**
 * 获取完全二叉树的节点个数
 * leetcode - 222
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    const getNodeSum = node => {
        if (node === null) {
            return 0;
        }
        let leftNum = getNodeNum(node.left);
        let rightNum = getNodeNum(node.right);
        return leftNum + rightNum + 1;
    };
    return getNodeSum(root);
};

var sumOfLeftLeaves = function (root) {
    const nodesSum = node => {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 0;
        }
        let leftValue = nodesSum(node.left);

        if (node.left && node.left.left === null && node.left.right === null) {
            leftValue = node.left.val;
        }

        let rightValue = nodesSum(node.right);
        
        let sum = leftValue + rightValue;
        return sum;
    };
    return nodesSum(root);
};

/**
 * 获取路径总和
 * leetcode - 113
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const res = [];
    const travelsal = (node, cnt, path) => {
        if (cnt === 0 && !node.left && !node.right) {
            res.push([...path]);
            return;
        }
        if (!node.left && !node.right) {
            return;
        }
        if (node.left) {
            path.push(node.left.val);
            travelsal(node.left, cnt - node.left.val, path);
            path.pop();
        }
        if (node.right) {
            path.push(node.right.val);
            travelsal(node.right, cnt - node.right.val, path);
            path.pop();
        }
        return;
    };
    if (!root) {
        return res;
    }
    travelsal(root, targetSum - root.val, [root.val]);
    return res;
};

/**
 * 二叉树中第二小的节点
 * leetcode - 671
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    let ans = -1;
    const rootValue = root.val;

    const dfs = (node) => {
        if (node === null) {
            return;
        }
        if (ans !== -1 && node.val >= ans) {
            return;
        }
        if (node.val > rootValue) {
            ans = node.val;
        }
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return ans;
};