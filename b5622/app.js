const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split('');
// W, A
let phone = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
// phone[i] : i roop 2~9
// input[j] : j roop input.length

sumTime(input);

function sumTime(inputArr) {
    let answer = 0;

    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 2; j <= 9; j++) {
            if (phone[j].includes(inputArr[i])) {
                answer += j + 1;
            }
        }
    }
    console.log(answer);
}