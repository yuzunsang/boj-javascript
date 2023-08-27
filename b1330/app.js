const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [a, b] = input[0].split(' ').map((item) => +item);

if (a > b) {
    console.log(">");

} else if (a < b) {
    console.log("<");

} else {
    console.log("==");
}