const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map((item) => +item);
const scores = input[1].split(" ").map((item) => +item);
scores.sort((a, b) => b - a);
console.log(scores[k - 1]);
