const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
let nums = input.map(Number);

const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let ans = [];
for (let el of nums) {
  while (!isPrime(el)) {
    el++;
  }
  ans.push(el);
}
console.log(ans.join("\n"));
