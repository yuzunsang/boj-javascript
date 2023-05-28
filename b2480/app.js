const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
    let reward;
    let saveNum;

    if ((a == b) & (b == c)) {
        saveNum = c;
        reward = 10000 + saveNum * 1000;
    } else if ((a == b) & (b != c)) {
        saveNum = b;
        reward = 1000 + saveNum * 100;
    } else if ((a == c) & (b != c)) {
        saveNum = c;
        reward = 1000 + saveNum * 100;
    } else if ((b == c) & (a != c)) {
        saveNum = c;
        reward = 1000 + saveNum * 100;
    } else {
        if (a > b) {
            if (a > c) {
                saveNum = a;
            } else {
                saveNum = c;
            }
        } else {
            if (b > c) {
                saveNum = b;
            } else {
                saveNum = c;
            }
        }
        reward = saveNum * 100;
    }

    console.log(reward);
}