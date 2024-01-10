const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let ns = input[1].split(" ").map((item) => +item);
let ms = input[3].split(" ").map((item) => +item);
const map = new Map();
ns.forEach((v) => map.set(v, 1));

let ans = "";
ms.map((v) => {
  if (!map.get(v)) ans += "0" + " ";
  else ans += "1" + " ";
});
console.log(ans);
