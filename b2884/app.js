const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);
solution(input[0], input[1]);

function solution(H ,M) {
    if (M >= 45) {
        M -= 45;
    } else {
        if (H == 0) {
            H += 23;
            M += 15;
        } else {
            H -= 1;
            M += 15;
        }
    }
    
    console.log(H, M)
}