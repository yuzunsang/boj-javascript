const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let nums = input[1].split(" ").map((item) => +item);
let tg = input[3].split(" ").map((item) => +item);
const map = new Map();
nums.map((v) => {
  if (!map.has(v)) map.set(v, 1);
  else {
    let asc = map.get(v) + 1;
    map.delete(v);
    map.set(v, asc);
  }
});
let ans = [];
tg.map((v) => {
  // map에 숫자가 없으면
  if (!map.has(v)) ans.push(0);
  // map에 숫자가 있으면 => value 출력
  else ans.push(map.get(v));
});
console.log(ans.join(" "));
