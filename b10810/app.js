const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

num = input[0].split(' ').map((item) => +item);
const n = num[0];
const m = num[1];

let cnt = 0;
for(let i = 0; i < m; i++) {
    items = input[i].split(' ').map((item) => +item);
}
console.log(cnt);