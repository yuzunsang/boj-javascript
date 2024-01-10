const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = Number(input.shift());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" "));
}
arr = arr.sort(([a, c], [b, d]) => +a - +b);
let ans = [];
for (let i = 0; i < arr.length; i++) {
  let tmp = arr[i];
  ans.push(tmp.join(" "));
}
console.log(ans.join("\n"));
