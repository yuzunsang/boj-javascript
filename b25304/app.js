const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const x = +input[0], n = +input[1];
let ans = 0;

for (let i = 2; i <= n + 1; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);

    ans += a * b;
}

if (ans === x) console.log('Yes');
else console.log('No');