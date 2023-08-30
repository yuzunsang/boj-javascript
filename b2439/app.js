const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];

for (let i = 1; i <= n; i++) {
    let ans = '';

    for (let j = n - i; j >= 1; j--)
    {
        ans += ' ';
    }
    for (let k = 1; k <= i; k++)
    {
        ans += '*';
    }

    console.log(ans);
}