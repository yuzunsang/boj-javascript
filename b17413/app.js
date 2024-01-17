const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let word = ""; // tmp의 역할
let isTag = false; // tag인지 nontag인지 판별
let ans = ""; // 최종 결과

for (let el of input) {
  // el 가 < 인 경우
  if (el === "<") {
    isTag = true;
    ans += word.split("").reverse().join("") + el;
    word = "";
  }
  // > 인 경우
  else if (el === ">") {
    isTag = false;
    ans += word + el;
    word = "";
  }
  // 공백 인 경우
  else if (el === " ") {
    // 태그 상태의 공백
    ans += (!isTag ? word.split("").reverse().join("") : word) + el;
    word = "";
  }
  // word 인 경우
  else {
    word += el;
  }
}

ans += word.split("").reverse().join("");

console.log(ans);
