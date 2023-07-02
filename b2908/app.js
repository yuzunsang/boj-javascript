const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [A, B] = input[0].split(' ');
// 839 237

let num1 = Number(A.split('').reverse().join(''));
let num2 = Number(B.split('').reverse().join(''));

console.log(findMax(num1, num2));

function findMax(num1, num2) {
    return Math.max(num1, num2);
}