const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 단순 반복으로 풀기 (시간복잡도 0(10^3))
const [N, M] = input[0].split(' ').map((item) => +item);
const cards = input[1].split(' ').map((item) => +item);

let sum = 0;
let ans = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cards[i] + cards[j] + cards[k];

      if (sum <= M && sum > ans) {
        ans = sum;
      }

      if (sum === M) {
        console.log(sum);
        return;
      }
    }
  }
}

console.log(ans);