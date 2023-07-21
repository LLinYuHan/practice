/**
 * 异或运算
 * 任何数和 0 进行异或运算，结果为任何数本身
 * 任何数和自己进行异或运算，结果为 0
 * 本题遍历数组进行异或后，结果便为单独出现的数字
 *
 * @param {number[]} nums 
 * @returns {number}
 */
function singleNumber(nums) {
    let single = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        single ^= nums[i];
    }
    return single;
}