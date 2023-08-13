const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const array1 = [1, 2, 3, 4];

const initVal = 0;
const sumWithInit = array1.reduce((acc, curr) => acc + curr, initVal);


console.log(sumWithInit)