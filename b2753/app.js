const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const yr = +input[0];

if (yr % 4 === 0 && yr % 100 !== 0) {
    console.log(1);

} else if (yr % 400 === 0) {
    console.log(1);

} else {
    console.log(0);
}