const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);
    console.log(a + b);
}