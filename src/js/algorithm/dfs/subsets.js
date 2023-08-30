function subsets(nums) {
    const ans = [];
    const dfs = (nums, start, temp) => {
        ans.push(temp);
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
            dfs(nums, i + 1, temp.slice());
            temp.pop();
        }
    };
    dfs(nums, 0, []);
    return ans;
}

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    const dfs = (nums, index, temp) => {
        ans.push([...temp]);
        if (index > nums.length - 1) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            temp.push(nums[i]);
            dfs(nums, i + 1, temp);
            temp.pop();
        }
    };
    dfs(nums, 0, []);
    return ans;
}