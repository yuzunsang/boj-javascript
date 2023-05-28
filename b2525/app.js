const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let hr = +input[0].split(' ')[0];
let min = +input[0].split(' ')[1];
let op_min = +input[1];

let temp = hr * 60 + min + op_min;

min = temp % 60;
hr = (temp - min) / 60;

if (hr >= 24) {
    hr -= 24;
}

console.log(hr, min);