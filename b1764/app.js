const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const set = new Set();
for (let i = 1; i <= n; i++) {
  set.add(input[i].trim());
}
let ans = [];
for (let i = n + 1; i <= n + m; i++) {
  // set에 해당 원소가 있다면 ans에 push
  if (set.has(input[i].trim())) ans.push(input[i].trim());
}
ans.sort();
console.log(ans.length);
console.log(ans.join("\n"));
