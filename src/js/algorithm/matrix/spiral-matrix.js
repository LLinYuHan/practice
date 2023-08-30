function spiralOrder(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const res = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right]);
        }
        for (let i = right; i > left; i--) {
            res.push(matrix[bottom][i]);
        }
        for (let i = bottom; i > top; i--) {
            res.push(matrix[i][left]);
        }
        right--;
        top++;
        bottom--;
        left++;
    }
    if (top === bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
    }
    else if (left === right) {
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][left]);
        }
    }

    return res;
}

function generateMatrix(n) {
    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    let cnt = 1;

    while (cnt <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = cnt;
            cnt++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = cnt;
            cnt++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = cnt;
            cnt++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = cnt;
            cnt++;
        }
        left++;
    }

    return matrix;
}