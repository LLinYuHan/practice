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

/**
 * 判断一个数是否为丑数
 *
 * @param {number} n 待判断的数
 * @returns {boolean} 如果 n 是丑数，返回 true，否则返回 false
 */
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

/**
 * 丑数 II
 * leetcode - 264
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let p2 = 1, p3 = 1, p5 = 1;
    for (let i = 2; i <= n; i++) {
        const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
        dp[i] = Math.min(Math.min(num2, num3), num5);
        if (dp[i] === num2) {
            p2++;
        }
        if (dp[i] === num3) {
            p3++;
        }
        if (dp[i] === num5) {
            p5++;
        }
    }
    return dp[n];
};