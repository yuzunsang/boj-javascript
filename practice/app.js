// const alert = console.log.bind(console);

let map = new Map();

let number = 0;
let str = 'string';
let obj = {a : 1};
let fnc = () => {
  console.log('fnc');
}

map.set('number', 0);
map.set(str, 1); // key에 string 가능
map.set(obj, 2); //key에 object 가능
map.set(fnc, 3); // key에 함수 가능


console.log(map.has('number'));