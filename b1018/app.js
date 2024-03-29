const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
// 정상적인 체스판
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
let answer = 8 * 8;

// 주어진 체스판
let board = [];
for (let i = 1; i <= N; i++) {
  board[i - 1] = input[i].split('');
}


for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i);
  }
}

function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {      
      if (board[i][j] !== white[i-y][j-x])
        checkWhite++;
      if (board[i][j] !== black[i-y][j-x])
        checkBlack++;
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;
  
  if (min < answer)
    answer = min;
}

console.log(answer);