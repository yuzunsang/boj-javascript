const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line.toString().split('').map((item) => +item));

}).on('close', () => {
    input.shift();
    let arr = Array.from(Array(100), () => Array(100).fill(false));

    for (let i = 0; i < input.length; i++) {
        let x = input[i][0];
        let y = input[i][1];

        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                arr[x + j][y + k] = true;
            }
        }
    }

    let result = arr.reduce((acc, curr) => {
        for (let el of curr) {
            if (el) acc++;
        }

        return acc;
    }, 0);
    
    console.log(result);
    process.exit();
});
