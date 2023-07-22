const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; ; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);

    if (a === 0 && b === 0) break;
    
    console.log(a + b);
}