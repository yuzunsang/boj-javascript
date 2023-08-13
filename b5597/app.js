const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const nums = input.map((item) => +item);

solution(nums);

function solution(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
}