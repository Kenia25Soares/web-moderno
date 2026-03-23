// setTimeout(function() {
//   console.log('Executando callback...')
// }, 2000)

// // Como colocar uma callback dentro de outra
// setTimeout(function() {
//   console.log('Executando callback...')

//   setTimeout(function() {
//     console.log('Executando callback...')

//     setTimeout(function() {
//       console.log('Executando callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

// Com Promisse, depois de 2 segundos
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
          console.log('Executando promise...')
          resolve()
        }, tempo)
    })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)