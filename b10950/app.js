const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
    for (let i = 1; i <= +input[0]; i++){
        let [A, B] = input[i].split(' ').map((item) => +item);
        console.log(A + B);
    }
}