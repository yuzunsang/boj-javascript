const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
let arr = new Array(N).fill(1).map((a, b) => a + b);

for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(' ').map((item) => +item);
    
    let tmpArr = [];

    for (let j = a; j <= b; j++) tmpArr.push(arr[j - 1]);

    tmpArr.reverse();

    arr.splice(a - 1, tmpArr.length,...tmpArr);

}

console.log(arr.join(' '));