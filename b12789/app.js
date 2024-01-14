const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const q = input[0].split(" ").map(Number);
const stack = [];
let passNum = 0;

for (let i = 0; i < q.length; i++) {
  // passNum와 일치
  while (
    (stack.length && stack[stack.length - 1] === passNum + 1) ||
    q[i] === passNum + 1
  ) {
    if (stack[stack.length - 1] === passNum + 1) {
      passNum = stack.pop();
    } else {
      passNum = q[i];
      break;
    }
  }
  // passNum와 불일치
  if (passNum !== q[i]) stack.push(q[i]);
}

// stack에 남은 원소가 처리 가능한 지
while (stack[stack.length - 1] === passNum + 1) {
  passNum = stack.pop();
}

if (!stack.length) console.log("Nice");
else console.log("Sad");
