const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => +item);

console.log(input.reduce((acc, cur) => acc + cur, 0) / 5);
console.log(input.sort((a, b) => a - b)[2]);
