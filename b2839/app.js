const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];

for (let i = 0; i <= Math.floor(5000 / 3); i++) {
  for (let j = 0; j <= 1000; j++) {
    if (n === 3 * i + 5 * j) {
      console.log(i + j);
      return;
    }
  }
}
console.log(-1);
