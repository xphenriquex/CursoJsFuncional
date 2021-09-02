const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99},
    { nome: 'impressora', qtde: 0, preco: 649.50},
    { nome: 'caderno', qtde: 4, preco: 27.10},
    { nome: 'lapis', qtde: 3, preco: 5.82},
    { nome: 'tesuoura', qtde: 1, preco: 19.20},
];

const getNome = obj => obj.nome;
const qtdeMaiorQueZero = obj => obj.qtde > 0;

// const nomesItensValidos = carrinho
//     .filter(qtdeMaiorQueZero)
//     .map(getNome);

// console.log(nomesItensValidos);

Array.prototype.meuFilter = function(fn){
    const novoArray = [];
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this);
        if(result){
            novoArray.push(this[i]);
        }
    }
    return novoArray;
}

const nomesItensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome);
    
console.log(nomesItensValidos)