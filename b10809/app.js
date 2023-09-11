const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const str = input[0].split('');
let ans = [];

for (let i = 97; i <= 122; i++) {
    ans.push(str.indexOf(String.fromCharCode(i)));
}

console.log(ans.join(' '));