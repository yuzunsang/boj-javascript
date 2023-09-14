const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const NM = input.shift().split(' ').map(num => Number(num));
const N = NM.shift();
const M = NM.shift();
const cards = input.shift().split(' ').map(num => Number(num));
let picked = new Array(N);
picked.fill(false, 0, N);

let min = 300000;
let sum = 0;
let answer = 0;


solution(3, 0);
console.log(answer);

function solution(last, start) {
  if (last === 0) {
    if (sum <= M && M - sum < min) {
      min = M - sum;      
      answer = sum;
      return sum;
    }
    return;
  }

  for (let i = start; i < cards.length; i++) {
    if (!picked[i]) {
      picked[i] = true;
      sum += cards[i];
      solution(last - 1, i);
      picked[i] = false;
      sum -= cards[i];
    }
  }
}