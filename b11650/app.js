const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = [];
for (let i = 1; i <= +input[0]; i++) {
  arr.push(input[i].split(" ").map((item) => +item));
}

let newArr = arr.sort(([a, b], [c, d]) => a - c || b - d);

let ans = [];
for (let i = 0; i < newArr.length; i++) {
  let answer = newArr[i].join(" ");
  ans.push(answer);
}
console.log(ans.join("\n"));
