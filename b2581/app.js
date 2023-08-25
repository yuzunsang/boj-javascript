const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const isPrime = (n) => {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

const [m, n] = [+input[0], +input[1]];
let arr = [];

for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
        arr.push(i);
    }
}

let sum = arr.reduce((a, b) => a + b, 0);

if (arr.length !== 0) {
    console.log(sum);
    console.log(Math.min(...arr));

} else {
    console.log(-1);
}