const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const d = Array(n + 1).fill(0);

d[1] = 1;
d[2] = 3;

function dp(x) {
  if (x < 3) return d[x];

  for (let i = 3; i <= x; i++) {
    d[i] = (d[i - 1] + d[i - 2] * 2) % 10007;
  }
  return d[x];
}

console.log(dp(n));
