const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let nums = input.map((item) => +item);
let set = new Set(nums);

for (let i = 1; i <= 30; i++)
{
  if (!set.has(i)) console.log(i);
}