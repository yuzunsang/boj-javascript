const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let i = 0;

while (1) {
    let arr = [];
    let n = +input[i];

    if (n === -1) break;

    for (let j = 1; j < n; j++) {
        if (n % j === 0) {
            arr.push(j);
        }
    }

    let result = arr.reduce((a, b) => a + b, 0);

    if (n === result) {
        let ans = arr.join(' + ');
        console.log(`${n} = ${ans}`);

    } else {
        console.log(`${n} is NOT perfect.`);
    }

    i++;
}