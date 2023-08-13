const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const[N, M] = input[0].split(' ').map((item) => +item);

let arr = Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
    let [x, y] = input[i].split(' ').map((item) => +item);
    
    let temp = arr[x - 1];
    arr[x - 1] = arr[y - 1];
    arr[y - 1] = temp;
}

console.log(arr.join(' '));