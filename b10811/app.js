const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
let arr = [];

for (let i = 1; i <= N; i++) {
    arr.push(i);
}

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);

    let tempArr = [];
    for (j = a - 1; j < b; j++) {
        tempArr.push(arr[j]);
    }

    tempArr.reverse();
    arr.splice(a - 1, b - a + 1, ...tempArr);
}

console.log(arr.join(' '));