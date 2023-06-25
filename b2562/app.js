const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(items) {
    let max = 0;
    let maxidx = 0;
    for (let i = 0; i < 9; i++) {
        item = items[i];
        if (max < item) {
            max = item;
            maxidx = i + 1;
        }
    }
    
    console.log(max);
    console.log(maxidx);
}