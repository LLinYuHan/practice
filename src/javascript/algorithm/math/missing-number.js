/**
 * 缺失的数字
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const n = nums.length;
    let total = Math.floor(n * (n + 1) / 2);
    let arrSum = 0;
    for (let i = 0; i < n; i++) {
        arrSum += nums[i];
    }
    return total - arrSum;
}

function isUgly(n) {
    if (n <= 0) {
        return false;
    }
    const factors = [2, 3, 5];
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }
    return n === 1;
}