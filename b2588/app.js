const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num1 = +input[0];
const num2 = +input[1];
const num2Splited = input[1].split('').map((item) => +item);

console.log(num1 * num2Splited[2]);
console.log(num1 * num2Splited[1]);
console.log(num1 * num2Splited[0]);
console.log(num1 * num2);