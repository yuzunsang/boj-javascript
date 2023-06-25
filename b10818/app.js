const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrayLength = +input[0];
const items = input[1].split(' ').map((item) => +item);

solution(arrayLength, items);

function solution(arrayLength, items) {
    let min = 1000001;
    let max = -1000001;
 
    for (let i = 0; i < arrayLength; i++) {
        if (items[i] > max) max = items[i];
        if (items[i] < min) min = items[i];
    }

    console.log(`${min} ${max}`);
}