const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let max = 0, cnt = 0;

for (let i = 0; i < input.length; i++) {
   if (max < +input[i])
   {
    max = +input[i];
    cnt = i + 1;
   }
}

console.log(max);
console.log(cnt);