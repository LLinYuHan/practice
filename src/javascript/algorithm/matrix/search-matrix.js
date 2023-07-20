function searchMatrix(matrix, target) {
    let x = matrix.length - 1, y = 0;
    let len = matrix[0].length;

    while (x >= 0 && y < len) {
        if (matrix[x][y] === target) {
            return true;
        }
        else if (matrix[x][y] > target) {
            x--;
        }
        else {
            y++;
        }
    }
    return false;
}