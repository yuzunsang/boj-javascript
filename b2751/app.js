const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

rl.on("line", (line) => {
  input.push(parseInt(line));
}).on("close", () => {
  input.shift();
  input.sort((a, b) => a - b);
  console.log(input.join("\n"));
  process.exit();
});
