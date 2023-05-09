/**
 * @file 无重复字符的最长子串
 * @author linyuhan
 */

var lengthOfLongestSubstring = function (s) {
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 0 ，相当于在字符串左边界左侧，还没有开始移动
    let rk = 0, ans = 0;
    for (let i = 0; i < n; i++) {
        if (i !== 0) {
            occ.delete(s.charAt(i - 1));
        }
        while (rk < n && !occ.has(s.charAt(rk))) {
            occ.add(s.charAt(rk));
            ++rk;
        }
        ans = Math.max(ans, rk - i);
    }
    return ans;
};