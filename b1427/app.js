const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(
  input[0]
    .split("")
    .sort((a, b) => b - a)
    .join("")
);