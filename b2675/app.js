const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];

for (let i = 1; i <= num; i++) {
    let answer = "";
    const [rep, str] = input[i].split(' ');
    // 3, ABC
    for (let j = 0; j < str.length; j++) {
        answer += str[j].repeat(rep);
    }
    console.log(answer);
}