const path = require('path');
const fs = require('fs');
const { Observable } = require('rxjs');

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo));
            });
            subscriber.complete();
        } catch (error) {
            subscriber.error(error);
        }
    });
}

function lerArquivo(caminho) {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'});
                subscriber.next(conteudo.toString());
            } catch (error) {
                subscriber.error(error);
            }
        }
    }))
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if(texto.endsWith(padraoTextual)){
                subscriber.next(texto);
            }
        }
    }))
}

function removerElementosSeVazio() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if(texto.trim()){
                subscriber.next(texto);
            }
        }
    }))
}

function removerElementosSeIniciarComNumero() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim());
            if(num !== num){
                subscriber.next(texto);
            }
        }
    }))
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, texto);
            subscriber.next(textoSemSimbolos);
        }
    }))
}

function mesclarElementos(array) {
    return array.join(' ');
} 

function separarTextoPor(simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte);
            });
        }
    }))
}

function agruparPalavras() {
    return createPipeableOperator(subscriber => ({
        next(palavras) {
            const agrupado = Object.values(palavras.reduce((acc, palavra) => {
                const el = palavra.toLowerCase();
                const qtde = acc[el] ? acc[el].qtde + 1 :  1;
                acc[el] = {elemento: el, qtde}
                return acc;
            }, {}));
            subscriber.next(agrupado);
        }
    }))
}

function ordenarPorAtributoNumerico(attr, ordem) {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return [...array].sort(ordem === 'desc' ? desc : asc);
    }
}


function createPipeableOperator(operatorfn) {
    return function (source) {
      return new Observable((subscriber) => {
        const sub = operatorfn(subscriber);
        source.subscribe({
          next: sub.next,
          error: sub.error || (e => subscriber.error(e)),
          complete: sub.complete || (() => subscriber.complete())
        });
      });
    };
  }


module.exports = {
    lerDiretorio,
    lerArquivo,
    elementosTerminadosCom,
    removerElementosSeVazio,
    removerElementosSeIniciarComNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparPalavras,
    ordenarPorAtributoNumerico
}