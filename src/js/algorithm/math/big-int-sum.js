/**
 * @file 大数相加
 * @author linyuhan
 */

function sum(a, b) {
    let result = '';
    const len = Math.max(a.length, b.length);

    a = a.padStart(len, '0');
    b = b.padStart(len, '0');

    // 进位标识
    let carry = 0;

    for (let i = len - 1; i >= 0; i--) {
        const n = +a[i] + +b[i] + carry;
        carry = Math.floor(n / 10);
        result = (n % 10) + result;
    }

    if (carry) {
        result = '1' + result;
    }
    return result;
}