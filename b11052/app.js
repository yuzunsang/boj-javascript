const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
const nums = input[1].split(" ").map(Number);
const d = Array(n + 1).fill(0);

function dp(x) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
      d[i] = Math.max(d[i], d[i - j] + nums[j - 1]);
    }
  }

  return d[x];
}

console.log(dp(n));
