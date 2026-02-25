/* 27- Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao objeto
recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:
Exemplo:*/

// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

// Resolução 1:

function inverter(objeto) {
  const objetoInvertido = {}

  Object.entries(objeto).forEach( parChaveValor => {
    const chave = 0,
    valor = 1

    objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
  })

  return objetoInvertido
}

console.log(inverter({ a: 5, b: 4, c: 3})) // { '3': 'c', '4': 'b', '5': 'a' }


// Resolução 2:
function inverter(objeto) {
  const paresDeChaveValorInvertidos = Object.entries(objeto)
            .map( parChaveValor => parChaveValor.reverse() )

  return  Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter({ z: 5, a: 4, c: 1})) // { '1': 'c', '4': 'a', '5': 'z' }
