const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

// Não tem acesso ao valor local, pois a função foi declarada no contexto léxico global.
// Como na minhaFuncao não tem o valor declarado, ela vai procurar no contexto léxico global e encontra o valor 'Global'.
// Se a função tivesse sido declarada dentro da função exec, ela teria acesso ao valor local e imprimiria 'Local'.