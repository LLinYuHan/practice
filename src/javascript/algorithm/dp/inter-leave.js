function isInterLeave(s1, s2, s3) {
    let n = s1.length;
    let m = s2.length;
    let t = s3.length;

    if (n + m !== t) {
        return false;
    }

    // let f = Array.from(Array(n + 1), () => new Array(m + 1));

    // f[0][0] = true;

    // for (let i = 0; i <= n; i++) {
    //     for (let j = 0; j <= m; j++) {
    //         let p = i + j - 1;
    //         if (i > 0) {
    //             f[i][j] = f[i][j] || (f[i - 1][j] && s1.charAt(i - 1) === s3.charAt(p));
    //         }
    //         if (j > 0) {
    //             f[i][j] = f[i][j] || (f[i][j - 1] && s2.charAt(j - 1) === s3.charAt(p));
    //         }
    //     }
    // }

    // return f[n][m];

    let f = new Array(m + 1);

    f[0] = true;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            let p = i + j - 1;
            if (i > 0) {
                f[j] = f[j] && s1.charAt(i - 1) === s3.charAt(p);
            }
            if (j > 0) {
                f[j] = f[j] || (f[j - 1] && s2.charAt(j - 1) === s3.charAt(p));
            }
        }
    }
}