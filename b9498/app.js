const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(score) {
    let grade = "";
    grade = (score <= 100 && score >= 90) ? "A"
        : (score <= 89 && score >= 80) ? "B"
        : (score <= 79 && score >= 70) ? "C"
        : (score <= 69 && score >= 60) ? "D"
        : "F";
    
    console.log(grade);
}