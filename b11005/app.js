const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [num, divider] = input[0].split(' ').map((el) => +el);

let ans = num.toString(divider).toUpperCase();

console.log(ans);