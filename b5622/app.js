const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const str = input[0].split('');
const dialInfo = {
    // 다이얼넘버 + 시간(1초) 이 value가 됨.
    'ABC' : 3,
    'DEF' : 4,
    'GHI' : 5,
    'JKL' : 6,
    'MNO' : 7,
    'PQRS' : 8,
    'TUV' : 9,
    'WXYZ' : 10
};
let result = 0;

for (let i = 0; i < str.length; i++) {
    for (let key in dialInfo) {
        if (key.includes(str[i])) {
            result += dialInfo[key];
            break;
        }
    }
}

console.log(result);