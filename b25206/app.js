const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const scores = {
    'A+' : 4.5, 'A0' : 4.0,
    'B+' : 3.5, 'B0' : 3.0,
    'C+' : 2.5, 'C0' : 2.0,
    'D+' : 1.5, 'D0' : 1.0,
    'F' : 0.0
};
let sum = 0;
let total = 0;

for (let i = 0; i < 20; i++) {
    let [sub, score, grade] = input[i].trim().split(' ');
    
    if (grade === 'P') continue;

    sum += Number(score) * scores[grade];
    total += Number(score);
}

console.log(sum / total);