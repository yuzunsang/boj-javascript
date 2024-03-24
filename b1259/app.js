const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
const ans = [];
for (let i = 0; i < input.length; i++) {
  let tmp = input[i].trim().split("");

  if (tmp.join("") === tmp.reverse().join("")) ans.push("yes");
  else ans.push("no");
}
console.log(ans.join("\n"));
