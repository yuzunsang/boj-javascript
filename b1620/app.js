const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
const map = new Map();
for (let i = 1; i <= n; i++) {
  map.set(input[i].trim(), i);
}
let ans = [];
for (let i = n + 1; i <= n + m; i++) {
  let selection = input[i];
  if (+selection === Number(selection)) {
    // number일 경우
    ans.push(input[+selection]);
  } else {
    // string일 경우
    ans.push(map.get(selection.trim()));
  }
}
console.log(ans.join("\n"));
