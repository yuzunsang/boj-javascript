const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n ,m] = input[0].split(' ').map((item) => +item);
const arr = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
    let [a, b, c] = input[i].split(' ').map((item) => +item);

    for (let j = a; j <= b; j++)
    {
        arr[j - 1] = c;
    }
}

console.log(arr.join(' '));