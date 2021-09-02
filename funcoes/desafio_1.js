const somar = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

//console.log(somar(1)(2)(3));


const calcular = function(a) {
    return function(b) {
        return function(fn) {
            return fn(a, b);
        }
    }
}

const multiplicar = function(a,b) {
    return a * b;
}

console.log(calcular(2)(3)(multiplicar));