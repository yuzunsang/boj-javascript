// const alert = console.log.bind(console);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, B] = input[0].split(' ');

console.log(N.charCodeAt(0) - 55);