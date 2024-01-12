const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
let arr = input.map(Number);

let ans = [];
arr.forEach((v) => {
  if (v === 0) ans.pop();
  else ans.push(v);
});
console.log(ans.reduce((acc, cur) => acc + cur, 0));
