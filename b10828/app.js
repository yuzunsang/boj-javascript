const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
const stack = [];
const ans = [];

for (let i = 0; i < input.length; i++) {
  let [command, num] = input[i].trim().split(" ");

  switch (command) {
    case "push":
      stack.push(num);
      break;
    case "pop":
      ans.push(stack.length ? stack.pop() : -1);
      break;
    case "size":
      ans.push(stack.length);
      break;
    case "empty":
      ans.push(stack.length ? 0 : 1);
      break;
    case "top":
      ans.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(ans.join("\n"));
