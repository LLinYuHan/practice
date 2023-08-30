function uniquePaths(m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        f[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        f[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }

    return f[m - 1][n - 1];
}

function uniquePathsWithObstacles(obstacleGrid) {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;

    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    f[0][0] = (obstacleGrid[0][0] === 0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                f[i][j] = 0;
                continue;
            }
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
}