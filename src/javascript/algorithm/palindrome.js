/**
 * @file 验证回文串
 * @author linyuhan
 */

function isPalindrome(s) {
    // 去除数字，字母以外的符号
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}