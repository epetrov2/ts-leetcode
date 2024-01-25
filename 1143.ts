function longestCommonSubsequence(text1: string, text2: string): number {
    const ilen = text1.length;
    const jlen = text2.length;
    let dp = Array<Array<number>>(ilen);
    let max = 0;
    for (let i = 0; i < ilen; i++) {
        dp[i] = Array<number>(jlen);
        for (let j = 0; j < jlen; j++) {
            if (text1[i]==text2[j]) {
                if (i > 0 && j > 0) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else dp[i][j] = 1;
                max = Math.max(max, dp[i][j]);
            } else {
                let val = 0;
                if (i > 0) val = dp[i - 1][j];
                if (j > 0) val = Math.max(val, dp[i][j - 1]);
                dp[i][j] = val;
            }
        }
    }
    return max;      
};

console.log(longestCommonSubsequence("bl", "yby"));

//longestCommonSubsequence('dcabccdabcdef', 'dabcdabcde');