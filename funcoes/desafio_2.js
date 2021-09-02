const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99, fragil: true},
    { nome: 'impressora', qtde: 1, preco: 649.50, fragil: true},
    { nome: 'caderno', qtde: 4, preco: 27.10, fragil: false},
    { nome: 'lapis', qtde: 3, preco: 5.82, fragil: false},
    { nome: 'tesuoura', qtde: 1, preco: 19.20, fragil: true},
];

//filter, map, reduce

//1. fragil: true
//2. qtde * preco -> total
//3. media dos totais

// getFragil = item => item.fragil;
// const ponto1 = carrinho.filter(getFragil);
//console.log(ponto1);

// const getTotal = item => item.qtde * item.preco;
// const ponto2 = ponto1.map(getTotal);
//console.log(ponto2);

// const somar = (acc, el, index, arr) => index + 1 === arr.length ?  (acc + el) / (index+1) : acc + el; 
// const ponto3 = ponto2.reduce(somar);
//console.log(ponto3);

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el, i, arr) => i + 1 === arr.length ?  (acc + el) / (i+1) : acc + el)

console.log(media)