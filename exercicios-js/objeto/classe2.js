class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

// extends -> serve para herdar as características de uma classe pai, ou seja, a classe filha pode acessar os atributos e métodos da classe pai.
//  No exemplo acima, a classe Filho herda as características da classe Pai, que por sua vez herda as características da classe Avo. Assim, o objeto
//  filho tem acesso ao atributo sobrenome da classe Avo e ao atributo profissao da classe Pai.