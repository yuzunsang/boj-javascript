const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [n, k] = input[0].split(' ').map((item) => +item);
let arr = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        arr.push(i); 
    }
}

if (arr.length < k) {
    console.log(0);

} else {
    console.log(arr[k - 1]);
}