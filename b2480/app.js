const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    let reward = 0;
    let saveNum = 0;

    if (a === b && a === c) {
        reward = 10000 + a * 1000;
    } else if (a === b || a === c || b === c) {     //a 를 기준으로 잡고 수 비교
        if (a === b || a === c) {
            reward = 1000 + a * 100;
        } else {
            reward = 1000 + b * 100;
        }
    } else {
        saveNum = Math.max(...input);   // 배열 중에서 최대인 값 찾기
        reward = saveNum * 100;
    }

    console.log(reward);
}