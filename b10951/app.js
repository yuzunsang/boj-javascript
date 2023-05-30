const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
console.log(input);

for (let i = 0 ; i < input.length ; i++) {
    input = +input[i];
    input = input.split(' ').map((item) => +item);
}