const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(Math.floor(12.34));
console.log(Math.floor(12.99));
console.log(Math.floor(-12.34));
console.log(Math.floor("12 34 56"));

console.log(parseInt(12.34));
console.log(parseInt(12.99));
console.log(parseInt(-12.34));
console.log(parseInt("12 34 56"));