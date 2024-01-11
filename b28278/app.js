const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = [];
let ans = [];

for (let i = 1; i <= +input[0]; i++) {
  let q = input[i].split(" ").map((item) => +item);

  // length가 2일 때
  if (q.length === 2) arr.push(q[1]);

  // length 가 1일 때(나머지 경우)
  if (q.length === 1) {
    if (q[0] === 2) {
      ans.push(arr.length ? arr.pop() : -1);
    } else if (q[0] === 3) {
      ans.push(arr.length);
    } else if (q[0] === 4) {
      ans.push(arr.length ? 0 : 1);
    } else if (q[0] === 5) {
      ans.push(arr.length ? arr[arr.length - 1] : -1);
    }
  }
}
console.log(ans.join("\n"));
