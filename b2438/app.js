const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let ans = "";

for (let i = 0; i < +input[0]; i++) {
    ans += "*";
    console.log(ans);
}