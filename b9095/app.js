const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const nums = input.map(Number);
const max = Math.max(...nums);
const d = Array(max + 1).fill(0);

d[1] = 1;
d[2] = 2;
d[3] = 4;
function dp(x) {
  for (let i = 4; i <= x; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  }

  console.log(d[x]);
}

for (let num of nums) {
  dp(num);
}
