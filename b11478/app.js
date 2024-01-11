const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const set = new Set();
let str = input[0]; // ababc

for (let i = 0; i < str.length; i++) {
  for (let j = str.length; j >= i + 1; j--) {
    set.add(str.substring(i, j).trim());
  }
}
console.log(set.size);
