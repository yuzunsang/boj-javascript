const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 2의 배수 개수와 5의 배수 개수를 구하는 함수
const findTwoFive = (n) => {
  let two = 0;
  let five = 0;
  for (let i = 2; i <= n; i *= 2) {
    two += ~~(n / i);
  }
  for (let i = 5; i <= n; i *= 5) {
    five += ~~(n / i);
  }

  return [two, five];
};

// 분자 : 2의 배수 개수, 5의 배수 개수 구하기
// 분모 : 2의 배수 개수, 5의 배수 개수 각각 구하기
// (분자의 2의 배수 개수) - (각 분모의 2의 배수 개수)
// (분자의 5의 배수 개수) - (각 분모의 5의 배수 개수)
// 두 값 중 작은 것을 출력
const [nt, nf] = findTwoFive(n);
const [mt, mf] = findTwoFive(m);
const [nmt, nmf] = findTwoFive(n - m);

console.log(Math.min(nt - mt - nmt, nf - mf - nmf));
