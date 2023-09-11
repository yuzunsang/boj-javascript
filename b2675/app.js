const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];

for (let i = 1; i <= T; i++) {
    let [rep, str] = input[i].split(' ');
    let ans = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < rep; j++) {
            ans += str[i];
        }
    }

    console.log(ans);
}