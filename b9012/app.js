const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const ans = [];

for (let str of input) {
  const stack = [];
  let isVps = true; // 규칙에 위배 시 false로 전환

  for (let el of str) {
    if (el === "(") stack.push(el);
    else if (el === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        isVps = false;
        break;
      }
    }
  }

  if (stack.length || !isVps) ans.push("NO");
  else ans.push("YES");
}

console.log(ans.join("\n"));
