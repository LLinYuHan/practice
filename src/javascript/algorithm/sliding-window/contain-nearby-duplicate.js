/**
 * 判断一个整数数组中是否存在距离不超过 k 的重复元素
 * 滑动窗口做法
 *
 * @param {number[]} nums - 整数数组
 * @param {number} k - 距离限制
 * @returns {boolean} - 如果存在距离不超过 k 的重复元素则返回 true，否则返回 false
 */
function containsNearbyDuplicate(nums, k) {
    const set = new Set();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
}