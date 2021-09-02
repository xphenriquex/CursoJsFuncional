const path = require('path');
const _ = require('lodash');
const { toArray, map, groupBy, mergeMap } = require('rxjs/operators');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"' ,'♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
];

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeIniciarComNumero(),
        groupBy(el => el),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elemento: palavras[0], qtde: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.qtde))
    )
    .subscribe(console.log)

//     .then(fn.mesclarElementos)

//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.agruparPalavras)
//     .then(fn.ordenarPorAtributoNumerico('qtde', 'desc'))
//     .then(console.log);