const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];    // 3 
let cnt = N;    // cnt = 3 , cnt-- 방식

solution(N, input.slice(1));
// N = 3 , input.slice(1) = [ 'happy\r', 'new\r', 'year' ]
function solution(N, arr) {
    for (let i = 0 ; i < N; i++) {
        let word = arr[i];  // word = 'happy'

        for (let j = 0; j < arr[i].length - 1; j++) {
            if (word[j] !== word[j + 1] && !!word.slice(j + 1).includes(word[j])) {
                cnt--;
                break;  // 조건이 아니므로 바로 탈출
            }
        }

    }

    console.log(cnt);
}