const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);

let arr = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
    let [x, y] = input[i].split(' ').map((item) => +item);
    
    let tempArr = [];

    for (let j = x; j <= y; j++) {
        tempArr.push(arr[j - 1]);
    }
    tempArr.reverse();

    arr.splice(x - 1, y - x + 1, ...tempArr);
}

console.log(arr.join(' '));