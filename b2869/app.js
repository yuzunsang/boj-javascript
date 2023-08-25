const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [asc, desc, height] = input[0].split(' ').map((item) => +item);

console.log(Math.ceil((height - desc) / (asc - desc)));