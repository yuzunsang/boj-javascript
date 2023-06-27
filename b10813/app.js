const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
let arr = [];

for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
}

for (let j = 1; j <= M; j++) {
    let [a, b] = input[j].split(' ').map((item) => +item);

    let temp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp;
}

console.log(arr.join(' '));