// const alert = console.log.bind(console);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const inputArr = input[1].split(' ').map((item) => +item);

let tempValue = findSum(inputArr);  // 1
findDivide(tempValue); // 2

function findSum(arr) {
    let sum = 0;
    for (let i = 0 ; i < N ; i++) {
        sum += arr[i];
    }
    
    console.log(sum);
    return sum;
}

function findDivide(num) {
    result = Math.floor(num / 14);

    console.log(result);
}