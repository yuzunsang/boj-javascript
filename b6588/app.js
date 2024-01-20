const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

const ans = [];
const max = Math.max(...input);

// 2 제외시키기
const isPrime = (n) => {
  if (n < 3) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
  }

  return true;
};
// 소수면 true 인 배열
const primeNums = Array(max)
  .fill()
  .map((_, i) => isPrime(i + 1));

for (let num of input) {
  // 인덱스가 2인 숫자 3부터 골드바흐가 가능한 지 확인
  for (let i = 2; i < primeNums.length; i++) {
    if (primeNums[i] && primeNums[num - i - 2]) {
      ans.push(`${num} = ${i + 1} + ${num - i - 1}`);
      break;
    }
  }
}
console.log(ans.join("\n"));
