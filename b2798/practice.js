// let result = '';
// let x = 'junsang';

// while (true) {
//     if (x.length == 1) {
//         result += x;
//         break;
//     }

//     let y = x.split('');
//     result += String(y.pop());
//     x = y.join('');
// }

// console.log(result);

function strReverse(str) {
    if (str.length === 1) {
        return str;
    }

    return str[str.length - 1] + strReverse(str.slice(0, str.length - 1));
}

console.log(strReverse('junsang'));