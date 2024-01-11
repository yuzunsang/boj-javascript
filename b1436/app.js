const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
let titleNum = 2666;

if (n === 1) console.log(666);
else if (n === 2) console.log(1666);
// n 이 3 이상인 경우
else {
  let iter = 3;
  while (1) {
    // 666 이 포함된 경우
    if (titleNum.toString().includes("666")) {
      if (iter === n) break;
      else iter++;
    }
    // 666 이 포함되지 않은 경우
    titleNum++;
  }
  console.log(titleNum);
}
