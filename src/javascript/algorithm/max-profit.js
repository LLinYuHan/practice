/**
 * @file max-profit 买卖股票的最佳时机
 * @author linyuhan
 */

/**
 * 最佳时机 I
 * 
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
}

/**
 * 最佳时机 II
 * 
 * @param {number[]} prices
 * @return {number}
 */
function maxProfitII(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
}



