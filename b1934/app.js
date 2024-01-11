const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
let ans = [];
for (let i = 1; i <= n; i++) {
  let nums = input[i].split(" ").map((item) => +item);
  nums = nums.sort((a, b) => a - b);
  let iter = 1;
  while ((nums[1] * iter) % nums[0]) {
    iter++;
  }
  ans.push(nums[1] * iter);
}
console.log(ans.join("\n"));
