const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(str) {
    const charCRO = [
        'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='
    ];
    let cnt = 0;
    
    for (let i = 0; i < charCRO.length; i++) {
        while(str !== str.replace(charCRO[i], '')) {
            cnt++;
            str = str.replace(charCRO[i], ' ');
        }
    }

    console.log(cnt + str.split(' ').join('').length);
}