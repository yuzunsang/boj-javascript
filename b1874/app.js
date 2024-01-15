const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const end = Number(input.shift());

let stack = [];
let ans = [];
let store = 1;

for (let i = 0; i < input.length; i++) {
  let num = +input[i];

  while (store < end + 1 || stack.length) {
    // stack의 마지막 원소가 num과 일치 시 pop하고 break
    if (stack.length && stack[stack.length - 1] === num) {
      stack.pop();
      ans.push("-");
      break;
    }
    // stack에 다음 숫자 push
    else if (store < end + 1) {
      stack.push(store);
      ans.push("+");
      store++;
    }
    // store가 end를 넘어선 경우 즉시 종료
    else {
      console.log("NO");
      return;
    }
  }
}

console.log(ans.join("\n"));
