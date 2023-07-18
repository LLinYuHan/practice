function combinationSum(candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        dfs(target, combine, idx + 1);
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    };

    dfs(target, [], 0);
    return ans;
}

function combinationSum2(candidates, target) {
    const ans = [];
    const tmpPath = [];

    const dfs = (start, sum) => {
        if (target === sum) {
            ans.push(tmpPath.slice());
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            if (candidates[i] > target - sum) {
                break;
            }
            tmpPath.push(candidates[i]);
            sum += candidates[i];
            dfs(i + 1, sum);
            sum -= candidates[i];
            tmpPath.pop();
        }
    };

    candidates.sort((a, b) => a - b);
    dfs(0, 0);
    return ans;
}