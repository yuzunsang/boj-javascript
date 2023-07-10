const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = Array.from(Array(100), () => Array(100).fill(false));
const n = +input[0];

presolution(n);

function presolution(n) {
    let data = [];

    for (let i = 1; i <= n; i++) {
        data.push(+input[i]);
    }

    console.log(data);
}

// solution(n, data);

// function solution(n, data) {

// }