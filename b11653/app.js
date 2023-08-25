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

let n = +input[0];
let arr = [];

// 이미 소수인 경우
if (isPrime(n)) {
    console.log(n);
}
// 주어진 수가 소수가 아닌 경우
// n : 3 i : 3 arr : [2 2 2 3]
else {
    for (let i = 2; i <= n; i++) {
        while(n % i === 0) {
            arr.push(i);
            n /= i;
        }

        if (n === i) break;
    }

    console.log(arr.join('\n'));
}