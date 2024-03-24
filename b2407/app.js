const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);
let min = m < n - m ? m : n - m;

let ans = 1;

// 6c3 = 20

// 6 5 4 => 짝수 2개
// 3 2 1 => 짝수 1개
// 약분이 된다면 해당 분자 원소는 나누고, 분모 원소는 없앤다

// 분자 배열과 분모 배열 생성
const parentArr = Array(min)
  .fill(n)
  .map((v, i) => v - i);
const childArr = Array(min)
  .fill(1)
  .map((v, i) => v + i);

// 분자 배열에 대해 반복문을 돌려서 짝수 배열의 첫번째 원소가 약분이 되는 지 판별
// childArr.map((v) => {

// })
