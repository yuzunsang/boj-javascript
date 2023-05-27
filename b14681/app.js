const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0], input[1]);
    process.exit();
});


function solution(x, y) {
    let quadrant;
    if (x > 0 && y > 0) {
        quadrant = 1;
    }
    if (x < 0 && y > 0) {
        quadrant = 2;
    }
    if (x < 0 && y < 0) {
        quadrant = 3;
    }
    if (x > 0 && y < 0) {
        quadrant = 4;
    }
    console.log(quadrant);
}