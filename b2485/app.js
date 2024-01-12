const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
let trees = input.map(Number);

let dist = [];
for (let i = 0; i < n - 1; i++) {
  dist.push(trees[i + 1] - trees[i]);
}

// 주어진 수들의 최대공약수 찾기
let gcd;
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
const getGcds = (arr) => {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = getGcd(result, arr[i]);
  }
  return result;
};
gcd = getGcds(dist);

// 차이만큼 counter 조정
let counter = 0;
for (let el of dist) {
  if (el !== gcd) counter += el / gcd - 1;
}
console.log(counter);
