//desafio
//gerar um stream de números
//entre min e max com Observables
const { Observable, noop } = require('rxjs')

function entre(min, max) {
    return new Observable(observer => {
        Array(max - min).fill().map((_, i) => {
            observer.next(min + i);
        })
        observer.complete();
    })
}


entre(4, 10)
    .subscribe({
        next: num => console.log(`num = ${num}`),
        error: noop,
        complete: () => console.log('fim')
    })