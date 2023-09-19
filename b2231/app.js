const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];

let result = [];

for (let i = 1; i <= N; i++) {
  let testNum = String(i);
  let digit = testNum.split('').map((item) => +item);
  
  let sum = 0;

  for (let j = 0; j < digit.length; j++) sum += digit[j];
  
  sum += Number(i);
  
  if (sum === N) result.push(testNum);
}

if (result.length === 0) console.log(0);
else console.log(Math.min(...result));