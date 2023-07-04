const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];    // 5

for (let i = 1 ; i < N ; i++) {
    let blank = ' '.repeat((N - i));
    let star = '*'.repeat(i + (i - 1));
    console.log(blank + star);
}

for (let j = N ; j > 0 ; j--) {
    let blank = ' '.repeat((N - j));
    let star = '*'.repeat(j + (j - 1));
    console.log(blank + star);
}