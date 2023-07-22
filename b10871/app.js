const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, X] = input[0].split(' ').map((el) => +el);
const items = input[1].split(' ').map((el) => +el); 

solution(N, X, items);

function solution(N, X, items) {
    let ans = items.filter((el) => el < X);

    console.log(ans.join(' '));
}