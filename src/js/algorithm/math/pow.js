/**
 * @file pow 快速幂算法
 * @author linyuhan
 * @description https://leetcode.cn/problems/powx-n/
 */

function pow(x, n) {
    const quickMul = (x, n) => {
        let ans = 1.0;
        while (n > 0) {
            if (n % 2 === 1) {
                ans *= x;
            }
            x *= x;
            n = Math.floor(n / 2);
        }
        return ans;
    };

    return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n);
}