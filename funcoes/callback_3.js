const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99},
    { nome: 'impressora', qtde: 0, preco: 649.50},
    { nome: 'caderno', qtde: 4, preco: 27.10},
    { nome: 'lapis', qtde: 3, preco: 5.82},
    { nome: 'tesuoura', qtde: 1, preco: 19.20},
];

// const nome = obj => obj.nome;
// console.log(carrinho.map(nome));

// const mult = obj => obj.qtde * obj.preco;
// console.log(carrinho.map(mult));



Array.prototype.meuMap = function(fn) {
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        const r = fn(this[i], i, this);
        console.log(r);
        novoArray.push(r);
    }
    return novoArray;
}

const nome = obj => obj.nome;
console.log(carrinho.meuMap(nome));

const mult = (obj, i) => obj.qtde * obj.preco;
console.log(carrinho.meuMap(mult));