const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [A, B] = input[0].split(' ');

let splitedA = A.split('');
let splitedB = B.split('');

let reversedA = splitedA.reverse();
let reversedB = splitedB.reverse();

let joinedA = reversedA.join('');
let joinedB = reversedB.join('');

if (joinedA > joinedB) {
    console.log(joinedA);
} else {
    console.log(joinedB);
}