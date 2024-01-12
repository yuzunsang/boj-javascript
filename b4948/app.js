const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
const nums = input.map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let ans = [];
nums.forEach((v) => {
  let counter = 0;
  for (let i = v + 1; i <= v * 2; i++) {
    if (isPrime(i)) counter++;
  }
  ans.push(counter);
});
console.log(ans.join("\n"));
