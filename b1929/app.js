const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [m, n] = input[0].split(" ").map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

let ans = [];
for (let i = m; i <= n; i++) {
  if (isPrime(i)) ans.push(i);
}
console.log(ans.join("\n"));
