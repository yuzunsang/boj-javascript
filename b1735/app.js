const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [childA, parentA] = input[0].split(" ").map((item) => +item);
let [childB, parentB] = input[1].split(" ").map((item) => +item);

let parent = parentA * parentB;
let child = childA * parentB + childB * parentA;

let totalMin = Math.min(child, parent);
while (totalMin >= 2) {
  if (child % totalMin === 0 && parent % totalMin === 0) {
    child /= totalMin;
    parent /= totalMin;
    break;
  }
  totalMin--;
}
console.log(child, parent);
