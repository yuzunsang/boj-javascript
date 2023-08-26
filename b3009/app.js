const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let xNum = [], yNum = [];
let x = 0; y = 0;

for (let i = 0; i < 3; i++) {
    let [x, y] = input[i].split(' ').map((item) => +item);

    xNum.push(x);
    yNum.push(y);
}

xNum.sort();
yNum.sort();

x = xNum[0] === xNum[1] ? xNum[2] : xNum[0];
y = yNum[0] === yNum[1] ? yNum[2] : yNum[0];

console.log(`${x} ${y}`);