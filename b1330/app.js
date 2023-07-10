const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(a, b) {
    let output = "";
    output = (a > b) ? ">" : (a < b) ? "<" : "==";

    console.log(output);
}