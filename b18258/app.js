const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
let ans = [];
const q = [];

for (let i = 0; i < input.length; i++) {
  let [str, num] = input[i].trim().split(" ");

  if (str === "push") q.push(+num);
  else if (str === "pop") {
    if (q.length) ans.push(q.shift());
    else ans.push(-1);
  } else if (str === "size") ans.push(q.length);
  else if (str === "empty") ans.push(!q.length ? 1 : 0);
  else if (str === "front") {
    if (q.length) ans.push(q[0]);
    else ans.push(-1);
  } else if (str === "back") {
    if (q.length) ans.push(q[q.length - 1]);
    else ans.push(-1);
  }
}
console.log(ans.join("\n"));
