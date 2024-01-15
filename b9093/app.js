const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
let ans = [];
for (let i = 0; i < input.length; i++) {
  let tmp = input[i]
    .trim()
    .split(" ")
    .map((str) => str.split("").reverse().join(""));
  ans.push(tmp.join(" "));
}

console.log(ans.join("\n"));
