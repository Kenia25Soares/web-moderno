const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

// hasOwnProperty é um método que verifica se o objeto possui a propriedade diretamente, ou seja, se ela não é herdada.
// filha2 tem a propriedade 'nome' diretamente, então filha2.hasOwnProperty('nome') retorna true. Já a propriedade 'corCabelo' é herdada do pai,
// então filha2.hasOwnProperty('corCabelo') retorna false.