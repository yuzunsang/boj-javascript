// const alert = console.log.bind(console);

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
    [fruit] : 5,
};

alert(bag.apple);