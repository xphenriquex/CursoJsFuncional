const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function getConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

getConteudo(caminho)
    .then(conteudo => conteudo.split(/\r?\n/))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log);

