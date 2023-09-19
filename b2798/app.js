const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 1. 단순 반복으로 풀기 (시간복잡도 0(10^3))
// const [N, M] = input[0].split(' ').map((item) => +item);
// const cards = input[1].split(' ').map((item) => +item);

// let sum = 0;
// let ans = 0;

// for (let i = 0; i < N; i++) {
//   for (let j = i + 1; j < N; j++) {
//     for (let k = j + 1; k < N; k++) {
//       sum = cards[i] + cards[j] + cards[k];

//       if (sum <= M && sum > ans) {
//         ans = sum;
//       }

//       if (sum === M) {
//         console.log(sum);
//         return;
//       }
//     }
//   }
// }

// console.log(ans);

// 2. 재귀함수로 풀기
const [N, M] = input[0].split(' ').map((item) => +item);
const cards = input[1].split(' ').map((item) => +item);

let sum = 0;
let ans = 0;
let picked = new Array(N).fill(false);
// 배열 : '선택되지 않음'

blackjack(3, 0);
console.log(ans);

function blackjack(last, start) {
  if (last === 0) {
    if (sum <= M && sum > ans) {
      ans = sum;
      return sum;
    }
    return;
  }
  
  for (let i = start; i < cards.length; i++) {
    // if(선택되지 않음)
    if (!picked[i]) {
      picked[i] = true; // '선택됨'으로 표시
      sum += cards[i];  // 값 변경

      blackjack(last - 1, i); // 재귀 호출

      picked[i] = false;  // '선택되지 않음'으로 되돌림
      sum -= cards[i];  // 값 변경
    }
  }
}