const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
let arr = Array(N).fill(1).map((a, b) => a + b);
// [ 1, 2, 3, 4, 5 ]
solution(N, M);

function solution(N, M) {
    for (let i = 1; i <= M; i++) {
        let [a, b] = input[i].split(' ').map((item) => +item);
        
        let tmpValue = arr[a - 1];
        arr[a - 1] = arr[b - 1];
        arr[b - 1] = tmpValue;
    }

    console.log(arr.join(' '));
}