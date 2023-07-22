const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
// N : 5 , M : 4
let arr = new Array(N);
// [ <5 empty items> ]
solution(N, M);

function solution(N, M) {
    for (let i = 1; i <= M; i++) {
        let [start, end, k] = input[i].split(' ').map((item) => +item);

        
    }
}