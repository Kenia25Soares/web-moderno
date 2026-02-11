const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)  // o bind amarra o this ao objeto pessoa
falarDePessoa()

const falar2 = pessoa.falar
falar2() // causa o underfined, pois o this não está mais ligado ao objeto pessoa