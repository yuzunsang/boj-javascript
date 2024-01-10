const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const map = new Map();
let counter = 0;
for (let i = 1; i <= n; i++) {
  map.set(input[i], 1);
}
for (let i = n + 1; i <= m + n; i++) {
  if (map.get(input[i])) counter++;
}
console.log(counter);
