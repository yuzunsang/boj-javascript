const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let A = input[1].split(" ").map((item) => +item);
let B = input[2].split(" ").map((item) => +item);

const map = new Map();

A.map((v) => map.set(v, 1));
B.map((v) => {
  // 교집합 => delete
  if (map.has(v)) map.delete(v);
  else map.set(v, 1);
});

console.log(map.size);
