const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);
    console.log(`Case #${i}: ${a + b}`);
}