const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

for (let el of input)
{
    const side = el.split(' ').map((item) => +item);
    side.sort((a, b) => a - b);
    if (side[0] + side[1] <= side[2])
    {
        console.log('Invalid');
        continue;
    }

    const set = new Set(side);
    if (set.size == 1)
    {
        console.log('Equilateral');
    }
    else if (set.size == 2)
    {
        console.log('Isosceles');
    }
    else console.log('Scalene');
}