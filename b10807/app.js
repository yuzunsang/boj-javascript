const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

n = +input[0];
items = input[1].split(' ').map((item) => +item);
v = +input[2];

findNumbers(n, items, v);

function findNumbers(n, items, v) {
    let cnt = 0;
    for(let i = 0; i < n; i++) {
        if (items[i] === v) cnt++;

    }
    console.log(cnt);
}