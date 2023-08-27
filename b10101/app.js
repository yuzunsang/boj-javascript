const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let angle = [];

for (let i = 0; i < input.length; i++) {
    angle.push(+input[i]);
}

const sum = angle.reduce((a, b) => a + b, 0);  // 180

if (sum !== 180) console.log('Error');
else
{
    if (angle[0] === angle[1])
    {
        if (angle[1] === angle[2]) console.log('Equilateral');
        else console.log('Isosceles');
    }
    else
    {
        if (angle[1] === angle[2] || angle[2] === angle[0]) console.log('Isosceles');
        else console.log('Scalene');
    }
}