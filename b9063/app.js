const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
let xNum = [], yNum = [];

for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map((item) => +item);
    xNum.push(x);
    yNum.push(y);
}

const w = Math.max(...xNum) - Math.min(...xNum);
const h = Math.max(...yNum) - Math.min(...yNum);

console.log(w * h);