const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const MOD = 1000000009;
const SIZE = 100000;

// 2차원 배열 생성
const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0));
dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
for (let i = 4; i <= SIZE; i++) {
  dp[i][1] = dp[i - 1][2] + dp[i - 1][3];
  dp[i][2] = dp[i - 1][1] + dp[i - 1][3];
  dp[i][3] = dp[i - 1][1] + dp[i - 1][2];
}

const ans = [];
// input
//   .map(Number)
//   .forEach((v) => ans.push(dp[v].reduce((acc, cur) => acc + cur, 0)));

// console.log(ans.join("\n"));
