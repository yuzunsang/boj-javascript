const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const str = input[0].split('');
const result = [];

for (let i = 97; i <= 122; i++) {
    result.push(str.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));
