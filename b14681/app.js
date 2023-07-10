const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    solution(input[0], input[1]);
    process.exit();
})

function solution(x, y) {
    let quad = 0;
    quad = (x > 0 && y > 0) ? 1
        : (x < 0 && y > 0) ? 2
        : (x < 0 && y < 0) ? 3
        : 4;

    console.log(quad);
}