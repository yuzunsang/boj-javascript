const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const userNum = [];

for (let i = 0; i < 10; i++) {
    let num = input[i] % 42;

    if (userNum.indexOf(num) == -1) {
        userNum.push(num);
    }
};

console.log(userNum.length);