function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }  // Objeto sem a propriedade 'name'
imprimirNomeGritado(obj)


// No exemplo acima, o erro acontece porque o objeto passado para a função não possui a propriedade 'name'. A propriedade correta é 'nome'.
// Para corrigir o erro, devemos acessar a propriedade correta do objeto: