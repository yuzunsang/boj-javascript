const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(gcd(a, b), lcm(a, b));
