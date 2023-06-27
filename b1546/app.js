const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
let changeScores = [];

const scores = input[1].split(' ').map((item) => +item);
let M = Math.max(...scores);

for (let i = 0; i < N; i++) {
    changeScores.push((scores[i] / M ) * 100);
}

const result = changeScores.reduce((sum, current) => sum + current, 0);
const average = result / changeScores.length;

console.log(average);