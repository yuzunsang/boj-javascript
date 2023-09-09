const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);

let arr = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++)
{
    let tmp = 0;
    let [a, b] = input[i].split(' ').map((item) => +item);

    tmp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = tmp;
}

console.log(arr.join(' '));