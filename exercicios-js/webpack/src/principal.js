// const Pessoa = require('./pessoa')

import Pessoa from './pessoa'
// import './modulos/moduloA' // importa o moduloA, que por sua vez importa o moduloB, ou seja, ao importar o moduloA, o moduloB também é importado, pode ser feito aqui no arquivo principal ou
//  dentro do arquivo pessoa, o importante é que seja importado em algum lugar para que seja executado, caso contrário, o código dentro do moduloA e moduloB não será executado
import './assets' // importa os arquivos de estilos, que por sua vez importam as imagens, ou seja, ao importar os arquivos de estilos, as imagens também são importadas,
                  // pode ser feito aqui no arquivo principal ou

const atendente = new Pessoa
console.log(atendente.cumprimentar())