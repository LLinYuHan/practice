/**
 * 判断是否为同构字符串
 * 非常巧妙的做法，通过判断下标代替使用哈希表
 * leetcode - 205
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

/**
 * 判断单词规律，与同构字符串原理相同
 * leetcode - 290
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(' ');
    if (pattern.length !== arr.length) {
        return false;
    }
    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== arr.indexOf(arr[i])) {
            return false;
        }
    }
    return true;
};

/**
 * 赎金信
 * 利用字符统计
 * leetcode - 383
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (const c of magazine) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const c of ransomNote) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true;
};