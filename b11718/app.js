const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let i = 0; 
while(input[i] !== undefined) {
    console.log(input[i]);
    i++;
}