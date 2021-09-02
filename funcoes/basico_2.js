// function potencia(base, exp) {
//     return Math.pow(base, exp);
// } 

// console.log(potencia(2, 8))


function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp);
    }
} 

// const potenciaDe2 = potencia(2);

console.log(potencia(2)(8))