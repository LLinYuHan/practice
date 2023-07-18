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

function combine(n, k) {
    const ans = [];
    const dfs = (cur, n, k, temp) => {
        if (temp.length + (n - cur + 1) < k) {
            return;
        }
        if (temp.length === k) {
            ans.push(temp);
            return;
        }
        dfs(cur + 1, n, k, [...temp, cur]);
        dfs(cur + 1, n, k, temp);
    };
    dfs(1, n, k, []);
    return ans;
}

function combine(n, k) {
    const ans = [];
    const dfs = (n, k, temp, index) => {
        if (temp.length === k) {
            ans.push(temp);
            return;
        }

        for (let i = index; i <= n; i++) {
            temp.push(i);
            dfs(n, k, temp, i + 1);
            temp.pop();
        }
    };
    dfs(n, k, [], 1);
    return ans;
}