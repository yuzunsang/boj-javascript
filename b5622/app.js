const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split('');
const dialInfo = {
    'ABC': 2,
    'DEF': 3,
    'GHI': 4,
    'JKL': 5,
    'MNO': 6,
    'PQRS': 7,
    'TUV': 8,
    'WXYZ': 9
};
let ans = 0;

for (let i = 0; i < input.length; i++) {
    for (let key in dialInfo)
    {
        if (key.includes(input[i]))
        {
            ans += dialInfo[key] + 1;
            break;
        }
    }
}

console.log(ans);