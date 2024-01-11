const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const nums = input[0].split(" ").map((item) => +item);
const [min, max] = nums.sort((a, b) => a - b);
let iter = 1;

while ((max * iter) % min) {
  iter++;
}
console.log(max * iter);
