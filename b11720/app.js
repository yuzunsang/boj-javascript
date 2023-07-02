const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
let arr = input[1].split('').map((item) => +item);

console.log(solution(N, arr));

function solution(N, arr) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += arr[i];
    }

    return sum;
}