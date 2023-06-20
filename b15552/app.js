const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let cnt = +input[0];
let answer = '';

for (let i = 1; i <= cnt; i++) {
    let tempValue = input[i].split(' ').map((item) => +item);

    answer += tempValue[0] + tempValue[1] + '\n';
}

console.log(answer);