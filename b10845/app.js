const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
const q = [];
let ans = [];

for (let i = 0; i < input.length; i++) {
  let [order, num] = input[i].trim().split(" ");
  switch (order) {
    case "push":
      q.push(+num);
      break;
    case "pop":
      ans.push(q.length ? q.shift() : -1);
      break;
    case "size":
      ans.push(q.length);
      break;
    case "empty":
      ans.push(!q.length ? 1 : 0);
      break;
    case "front":
      ans.push(q.length ? q[0] : -1);
      break;
    case "back":
      ans.push(q.length ? q[q.length - 1] : -1);
      break;
  }
}
console.log(ans.join("\n"));
