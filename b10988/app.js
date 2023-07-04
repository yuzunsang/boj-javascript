const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let splitedStr = input[0].split('');
let solveNum = Math.floor(splitedStr.length);

solution(splitedStr, solveNum);

function solution(str, n) {
    let result = 0;
    for (let i = 0 ; i < n ; i++) {
        if (str[i] !== str[(str.length - 1) - i]) {
            result = 0;
            break;
        } else {
            result = 1;
        }
    }
    console.log(result);
}

// another solution
const word = input[0].trim();
const len = word.length / 2;
const left = word.slice(0, parseInt(len));
const right = word.slice(Number.isInteger(len) ? len : parseInt(len) + 1);

if (left === right.split('').reverse().join('')) {
    console.log(1);
} else {
    console.log(0);
}