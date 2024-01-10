const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input.shift());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map((item) => +item));
}
let newArr = arr.sort(([a, b], [c, d]) => b - d || a - c);
let ans = [];
for (let i = 0; i < newArr.length; i++) {
  let tmp = newArr[i].join(" ");
  ans.push(tmp);
}
console.log(ans.join("\n"));
