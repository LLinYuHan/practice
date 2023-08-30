/**
 * @file quick-sort
 * @author linyuhan
 */

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    
    // 递归地对左右两部分进行快速排序，并将结果合并
    return [...quickSort(left), pivot, ...quickSort(right)];
}