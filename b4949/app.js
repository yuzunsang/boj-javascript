const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const ans = [];

for (let str of input) {
  const stack = [];
  let isBalanced = true;
  if (str === ".") break;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    } else if (str[i] === ")") {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        isBalanced = false;
        break;
      }
    } else if (str[i] === ".") break;
  }

  if (stack.length || !isBalanced) ans.push("no");
  else ans.push("yes");
}
console.log(ans.join("\n"));
