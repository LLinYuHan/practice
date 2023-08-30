/**
 * @file 生成二叉搜索树
 * @description https://leetcode.cn/problems/unique-binary-search-trees-ii/
 */

function generateTree(n) {
    const helper = (start, end) => {
        let allTrees = [];

        if (start > end) {
            allTrees.push(null);
            return allTrees;
        }

        for (let i = start; i <= end; i++) {
            let leftTrees = helper(start, i - 1);
            let rightTrees = helper(i + 1, end);

            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    let curTree = new TreeNode(i);
                    curTree.left = left;
                    curTree.right = right;
                    allTrees.push(curTree);
                }
            }
        }

        return allTrees;
    };

    return helper(1, n);
}

/**
 * @description https://leetcode.cn/problems/unique-binary-search-trees/comments/
 */
function numTrees(n) {
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            G[i] += G[j - 1] * G[i - j];
        }
    }

    return G[n];
}