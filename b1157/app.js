const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    let upCase = str.toUpperCase();
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[upCase[i]] === undefined) {
            obj[upCase[i]] = 1;
        } else {
            obj[upCase[i]]++;
        }
    }

    let result = '';
    let cnt = 0;

    for (char in obj) {
        if (obj[char] > cnt) {
            cnt = obj[char];
            result = char;
        } else if (obj[char] === cnt) {
            result = '?';
        }
    }

    console.log(result);
}