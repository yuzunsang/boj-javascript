const alert = console.log.bind(console);

let arr = [1, 2];

let arrLike = {
  0: "something",
  1: "else",
  length: 2,

  [Symbol.isConcatSpreadable]: true
};

alert(arr.concat(arrLike));