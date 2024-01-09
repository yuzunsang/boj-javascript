const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];

for (let i = 1; i <= +input[0]; i++) {
  arr.push(+input[i]);
}
arr.sort((a, b) => a - b);
arr.map((v) => console.log(v));
