const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];

for (let line = 1; line <= N; line++) {
    let printString = '';
    let starCnt = line;
    let spaceCnt = N - line;

    for (let i = 0 ; i < spaceCnt ; i++) {
        printString += " ";
    }
    for (let i = 0 ; i < starCnt ; i++) {
        printString += "*";
    }

    console.log(printString);
}