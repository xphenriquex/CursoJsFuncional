const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99},
    { nome: 'impressora', qtde: 1, preco: 649.50},
    { nome: 'caderno', qtde: 4, preco: 27.10},
    { nome: 'lapis', qtde: 3, preco: 5.82},
    { nome: 'tesuoura', qtde: 1, preco: 19.20},
];


const getTotal = item => item.qtde * item.preco;
const somar = (acc, el) => acc + el;

// const totalGeral = carrinho.map(getTotal).reduce(somar, 0);

// console.log(totalGeral);

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial ? inicial : 0;
    for (let i = 0; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }
    return acc;
}


const totalGeral = carrinho.map(getTotal).meuReduce(somar);

console.log(totalGeral);