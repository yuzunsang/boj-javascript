const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
let arr = [...new Set(input)];
let ans = arr
  .sort()
  .sort((a, b) => a.length - b.length)
  .join("\n");
console.log(ans);
