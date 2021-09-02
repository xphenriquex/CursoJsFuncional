const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'dados', 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"' ,'♪', '_', '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
];

const palavrasMaisUsadas  = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir("-->"),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.agruparPalavras,
    fn.ordenarPorAtributoNumerico('qtde', 'desc'),
    )

    palavrasMaisUsadas(caminho).then(console.log);