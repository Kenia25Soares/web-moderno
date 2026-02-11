// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('João')
// p1.falar()

function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

//Para transformar a classe em uma função construtora, basta retirar a palavra class e o método falar, transformando-o em uma
// função dentro do construtor. O resultado é o mesmo, mas a sintaxe é diferente. O que fez dentro do construtor faz diretamente no
// objeto criado, enquanto na classe, o método falar é criado no protótipo da classe, ou seja, é compartilhado entre todas as instâncias
//  da classe. Já na função construtora, cada instância tem sua própria cópia do método falar, o que pode ser menos eficiente em termos de
//  memória.
