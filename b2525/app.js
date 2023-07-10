const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [hr, min] = input[0].split(' ').map((item) => +item);
const reqMin = +input[1];

solution(hr, min, reqMin);

function solution(hr, min, reqMin) {
    let tempMin = hr * 60 + min + reqMin;
    
    if (tempMin >= 24 * 60) {
        tempMin -= 24 * 60;
    }

    hr = Math.floor(tempMin / 60);
    min = tempMin - hr * 60;
    
    console.log(`${hr} ${min}`);
}