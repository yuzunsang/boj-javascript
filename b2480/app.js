const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const dice = input[0].split(' ').map((item) => +item);
dice.sort();
let ans = 0;

let set = new Set(dice);

if (set.size === 1) {
    ans = 10000 + dice[0] * 1000;
}
else if (set.size === 2) {
    ans = 1000 + dice[1] * 100;
}
else {
    ans = dice[2] * 100;
}

console.log(ans);