const alert = console.log.bind(console);

let sum = (a, b) => a + b;

sum = function(a, b) {
    return a + b;
}

alert(sum(1, 2));