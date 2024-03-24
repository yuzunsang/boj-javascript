const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
input = input.map(Number);
const MAX = Math.max(...input);
const MOD = 1000000009;

// 2차원 배열 생성
// const dp = Array.from({length : MAX + 1}, () => new Array(4).fill(0));
const dp = Array.from(Array(MAX + 1), () => new Array(4).fill(0));
dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1;
for (let i = 4; i < MAX + 1; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD;
}

const ans = [];
input.map((v) => {
  ans.push(dp[v].reduce((acc, cur) => (acc + cur) % MOD, 0));
});
console.log(ans.join("\n"));
