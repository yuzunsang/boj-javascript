const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [H, M] = input[0].split(' ').map((item) => +item);

solution(H, M);

function solution(hr, min) {
    let tempMin = hr * 60 + min;
    
    if (tempMin < 45) {
        tempMin += 24 * 60;
    }

    tempMin -= 45;
    
    hr = Math.floor(tempMin / 60);
    min = tempMin - hr * 60;

    console.log(hr);
    console.log(min);
}