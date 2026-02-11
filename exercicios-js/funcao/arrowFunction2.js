function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// () => { }   Chamamos de arrow function, ou seja, função de seta. Ela é uma função anônima, ou seja, sem nome.
// Ela é uma função de expressão, ou seja, ela é atribuída a uma variável. Ela é uma função de escopo léxico,
// ou seja, ela não tem seu próprio this, ela herda o this do contexto onde foi definida.