const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = +input[0];

const fact = (n) => {
  let ans = 0;
  if (n === 0) return 0;

  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) ans++;
    if (i % 25 === 0) ans++;
    if (i % 125 === 0) ans++;
  }
  return ans;
};

console.log(fact(num));
