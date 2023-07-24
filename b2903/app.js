const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];

solution(n);

function solution(n) {
    let ans = 0;
    ans = (2 ** n + 1) ** 2;

    console.log(ans);
}