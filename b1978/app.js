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

const n = +input[0];
let nums = input[1].split(' ').map((item) => +item);

console.log(nums.filter(v => isPrime(v)).length);