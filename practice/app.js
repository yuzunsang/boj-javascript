const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (i = 1 ; i <= +input[0] ; i++) {

    let tempValue = input[i].split(' ').map((item) => +item);
    let sum = tempValue[0] + tempValue[1];
    console.log(`Case #${i}: ${sum}`);
}