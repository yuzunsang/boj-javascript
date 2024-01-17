const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let ans = [];
const q = Array(N)
  .fill()
  .map((_, i) => i + 1);
// 1 2 3 4 5 6 7

for (let i = 1; i <= N; i++) {
  let cnt = 1;
  while (q.length) {
    let popEl = q.shift();
    if (cnt % K === 0) {
      ans.push(popEl);
    } else {
      q.push(popEl);
    }
    cnt++;
  }
}

console.log(`<${ans.join(", ")}>`);
