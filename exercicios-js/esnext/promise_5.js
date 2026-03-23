function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
      try {
          if(Math.random() < chanceErro) {
             reject('Ocorreu um erro!')
          } else {
             resolve(valor)
          }
      }catch(e) {
          reject(e)
      }

    })
}

funcionarOuNao('Testando...', 0.5)  // Se colocar ('Testando...', 0.9) vai da erro, mais o catch trata o erro
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.error(`Erro: ${err}`)) // Trata o erro se ocorrer, o catch e colocado sempre no final
    .then(() => console.log('Fim!'))