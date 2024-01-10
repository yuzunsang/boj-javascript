const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.shift();
const set = new Set();
for (let i = 0; i < input.length; i++) {
  let [name, msg] = input[i].trim().split(" ");
  if (msg === "enter") set.add(name);
  else set.delete(name);
}
console.log(Array.from(set).sort().reverse().join("\n"));
