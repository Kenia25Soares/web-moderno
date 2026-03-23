const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, function(_, conteudo) {
    // fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
    // console.log('Depois de ler')
  })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
  .then(conteudo => conteudo.split(/\r?\n/))
  // .then(linhas => console.log(linhas[1]))
  // .then(linhas => console.log(linhas.length))
  .then(linhas =>linhas.join(','))
  .then(conteudo => `O valor final é: ${conteudo}`)
  .then(console.log)