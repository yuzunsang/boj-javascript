const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let line = 1; line <= +input[0]; line++) {
    let starCnt = line;
    let printStar = '';
    for (let i = 0; i < starCnt; i++) {
        printStar += '*';
    }
    console.log(printStar);
}