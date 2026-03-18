const moduloA = require('../../moduloA') //caminho relativo, sobe dois niveis e depois acessa o moduloA
//('C:\Cursos\web-moderno\exercicios-js\node\moduloA.js')  //Caminho absoluto, mas não é recomendado, vou no moduloA.js e pego o caminho completo, Copy Path.
console.log(moduloA.ola)

const saudacao = require('saudacao')  // Esta no node_modules, não precisa do caminho relativo, o node procura automaticamente na pasta node_modules
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)