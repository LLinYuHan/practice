/**
 * @file 接雨水 双指针做法
 * @author linyuhan
 */

var trap = function(height) {
    let ans = 0;
    let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        // 当右侧值大于左侧值时，可以不考虑右值，直接通过计算左侧最大值和左侧值的【差值】得出结论
        if (height[left] < height[right]) {
            ans += leftMax - height[left];
            left++;
        }
        else {
            ans += rightMax - height[right];
            right--;
        }
    }
    return ans;
}