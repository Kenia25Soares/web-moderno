function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {  /*setInterval recebe a função e o intervalo de tempo*/
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa