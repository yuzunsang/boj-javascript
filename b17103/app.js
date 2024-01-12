const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
let arr = input.map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let primeArr = [];
for (let i = 2; i <= Math.max(...arr) / 2; i++) {
  if (isPrime(i)) primeArr.push(i);
}

let ans = [];
for (let el of arr) {
  let cnt = 0;
  let newPrimeArr = primeArr.filter((v) => v <= el / 2);

  for (let value of newPrimeArr) {
    if (isPrime(el - value)) cnt++;
  }

  ans.push(cnt);
}

console.log(ans.join("\n"));
