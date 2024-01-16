const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const left = input.shift().trim().split("");
const right = [];
// [ 'a', 'b', 'c', 'd' ]
input.shift();

for (let i = 0; i < input.length; i++) {
  // L => left의 마지막 원소를 right로 push
  // D => right의 마지막 원소를 left로 push
  // B => left의 마지막 원소 삭제
  // P => left에 원소 push
  let [move, el] = input[i].trim().split(" ");
  switch (move) {
    case "L":
      left.length && right.push(left.pop());
      break;
    case "D":
      right.length && left.push(right.pop());
      break;
    case "B":
      left.length && left.pop();
      break;
    case "P":
      left.push(el);
      break;
  }
}
console.log(left.concat(right.reverse()).join(""));
