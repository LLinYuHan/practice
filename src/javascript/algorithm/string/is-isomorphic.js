/**
 * 判断是否为同构字符串
 * 非常巧妙的做法，通过判断下标代替使用哈希表
 * @param {string} s 
 * @param {string} t 
 * @returns {boolean}
 */
var isIsomorphic = function(s, t) {
    for (let i = 0, len = s.length; i < len; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
};