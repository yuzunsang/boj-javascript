const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map((item) => +item);

solution(N, arr);

function solution(N, arr) {
    arr.sort((a, b) => a - b);

    console.log(`${arr[0]} ${arr[N - 1]}`);
}