/**
 * 全排列
 * @param {number[]} nums 
 */
function permute(nums) {
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let backtrack = tmpPath => {
        if (tmpPath.length === n) {
            res.push(tmpPath);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!tmpPath.includes(nums[i])) {
                tmpPath.push(nums[i]);
                backtrack(tmpPath.slice());
                tmpPath.pop();
            }
        }
    };
    backtrack(tmpPath);
    return res;
}

function permuteUnique(nums) {
    const vis = new Array(nums.length).fill(false);
    let n = nums.length;
    let res = [];
    let tmpPath = [];
    let backtrack = tmpPath => {
        if (tmpPath.length === n) {
            res.push(tmpPath);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            tmpPath.push(nums[i]);
            vis[i] = true;
            backtrack(tmpPath.slice());
            vis[i] = false;
            tmpPath.pop();
        }
    };
    nums.sort();
    backtrack(tmpPath);
    return res;
}