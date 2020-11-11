function countOptions(people, groups) {
  let dp = Array(people + 1).fill().map(() => Array(groups + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= people; i++){
      for (let j = 1; j <= Math.min(i, groups); j++) {
              dp[i][j] = dp[i- j][j] + dp[i -1][j - 1]
          }
      }
  return dp[people][groups];
}

