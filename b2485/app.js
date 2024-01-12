const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input.shift());
let nums = [];
input.forEach((v) => nums.push(+v));
nums = nums.sort((a, b) => a - b);

// 주어진 수들의 최대공약수 찾기
let diff = [];
for (let i = 0; i < n - 1; i++) {
  diff.push(nums[i + 1] - nums[i]);
}
let [max, min] = [Math.max(...diff), Math.min(...diff)];
let iter = min;
while (iter >= 2) {
  if (max % iter === 0 && min % iter === 0) break;
  iter--;
}
// 차이만큼 counter 조정
let counter = 0;
diff.forEach((v) => (counter += v / iter - 1));
console.log(counter);
