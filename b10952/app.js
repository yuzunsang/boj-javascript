const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
    let num = input[i].split(' ').map((item) => +item);
    console.log(num[0] + num[1]);
}