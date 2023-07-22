const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [num, divider] = input[0].split(' ');

let ans = parseInt(num, Number(divider));

console.log(ans);