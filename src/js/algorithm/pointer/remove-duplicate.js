/**
 * @file 删除有序数组中的重复项
 * @author linyuhan
 */

var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    let n = nums.length;
    for (let j = 1; j < n; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        // 表示 nums[slow - 2] === nums[slow - 1] === nums[slow] 或更多
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};