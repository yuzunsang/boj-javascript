const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
let nums = input[0]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b); // [ 999, 999, 999, 1000, 1000, 1000 ]
const set = new Set(nums); // Set(2) { 999, 1000 }
const map = new Map();

[...set].forEach((v, i) => map.set(v, i));

let ans = "";
input[0].split(" ").forEach((v, i) => (ans += map.get(+v) + " "));
console.log(ans);
