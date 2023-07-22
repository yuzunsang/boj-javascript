const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];

solution(T);

function solution(T) {
    const unit = [25, 10, 5, 1];
    
    for (let i = 1; i <= T; i++) {
        let arr = Array(4).fill(0);
        let C = +input[i];
        
        for (let j = 0; j < arr.length; j++) {
            if (Math.floor(C / unit[j]) !== 0) {
                arr[j] = Math.floor(C / unit[j]);
                C -= (Math.floor(C / unit[j])) * unit[j];
            }
        }

        console.log(arr.join(' '));
    }
}