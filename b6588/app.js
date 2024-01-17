const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const max = Math.max(...input);
let arr = new Array(max + 1).fill(true);
arr[0] = false;
arr[1] = false;

for (let i = 2; i <= max; i++) {
  if (!isPrime(i + 1)) {
    arr[i] = false;
  }
}

console.log(arr);

// let ans = "";
// for (let num of input) {
//   for (let prime of primes) {
//     if (isPrime(num - prime)) {
//       ans.push(`${num} = ${prime} + ${num - prime}\n`);
//       break;
//     }
//   }
// }

// console.log(ans);
