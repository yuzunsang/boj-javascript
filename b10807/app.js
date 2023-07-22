const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map((item) => +item);
const v = +input[2];

solution(n, arr, v);

function solution(n, arr, v) {
    const cnt = arr.filter((el) => el === v).length;
    console.log(cnt);
}