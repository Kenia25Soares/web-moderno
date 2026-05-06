import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        /*tipo: "Fala",
        nome: "Pedro"*/
        tipo: this.props.tipo,
        nome: this.props.nome
     }

    // utilizo o constructor para fazer o bind do método setTipo, para que ele possa acessar o this do componente, e assim alterar o estado do componente, e atualizar a interface
    // com as novas informações. O bind é necessário porque o método setTipo é chamado dentro do onChange do input, e o onChange é um evento do DOM, e o this dentro do onChange
    // não é o mesmo this do componente, então para acessar o this do componente dentro do onChange, tem que fazer o bind do método setTipo no constructor. Deixa de ter usar com o
    //arrow function, arrow function já tem o this do componente, não precisa fazer o bind do método setTipo no constructor. Não e necessario fazer assim onChange={e => this.setNome(e)}
    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
        // this.setNome = this.setNome.bind(this) // como não passei no construtor o bind do método setNome, uso a arrow function no onChange do input, para ele acessar o this do componente
    }

    setTipo(e) {
          // console.log(e.target.value)
          // this.props.tipo= e.target.value  // não da para usar assim que essa propriedade é imutável, não da para alterar o valor dela, para alterar o valor dela tem que usar o
          // setState, que é um método do Component, que é usado para alterar o estado do componente, e o estado do componente é usado para armazenar dados que podem ser alterados,
          //  e quando o estado do componente é alterado, o componente é re-renderizado, ou seja, ele é atualizado com as novas informações. Então para alterar o valor da
          // propriedade tipo, tem que usar o setState, e passar um objeto com a propriedade tipo e o novo valor dela. this.setState({ tipo: e.target.value })
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..."
                     value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..."
                    value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}