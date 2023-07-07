const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map((item) => +item);
// 3, 3
let newMatrixA = [];
let newMatrixB = [];

for (let i = 1; i <= 2 * N; i++) {
    let tempArr = input[i].split(' ').map((item) => +item);

    if (i <= N) {
        newMatrixA.push(tempArr);
    } else {
        newMatrixB.push(tempArr);
    }
}
// newMatrixA : [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 0, 1, 0 ] ]
// newMatrixB : [ [ 3, 3, 3 ], [ 4, 4, 4 ], [ 5, 5, 100 ] ]

function solution1(N, M, newMatrixA, newMatrixB) {
    const answerMatrix = [];

    for (let i = 0; i < N; i++) {
        answerMatrix.push([]);
    
        for (let j = 0; j < M; j++) {
            answerMatrix[i].push(newMatrixA[i][j] + newMatrixB[i][j]);
        }
    }
    return answerMatrix;
}

let answerMatrix = solution1(N, M, newMatrixA, newMatrixB);
let answerStr = "";

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        answerStr += `${answerMatrix[i][j]} `;
    }
    answerStr += `\n`;
}

console.log(answerStr);