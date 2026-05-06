import React from 'react'

// export default () => <h1>Bom dia Fulano!</h1>

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até breve!</h2>
]

// podesso usar o React.Fragment, que é um componente que não renderiza nada, ele é usado para agrupar elementos sem adicionar um nó extra ao DOM.
// Ele é útil quando você quer retornar múltiplos elementos de um componente sem adicionar um elemento pai extra ao DOM. Ele é usado para evitar a necessidade de adicionar um
//  elemento pai extra ao DOM, como uma div, quando você quer retornar múltiplos elementos de um componente. Não vai renderizar nada no HTML. em cima tem usar o import Fragment se
// for usar o React.Fragment, ou usar a sintaxe curta <> </> para usar o Fragment sem precisar importar o Fragment. import React, { Fragment } from 'react'
// export default props =>
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>


//São as 3 maneiras de retornar múltiplos elementos de um componente, usando um array, usando o React.Fragment, ou usando uma div. A escolha entre essas opções depende do
// contexto e das necessidades do seu projeto. O React.Fragment é útil quando você quer evitar adicionar um elemento pai extra ao DOM, enquanto a div pode ser útil quando
// você precisa de um elemento pai para aplicar estilos ou outras propriedades. O array é útil quando você quer retornar múltiplos elementos sem precisar de um elemento pai,
//  mas pode ser menos legível do que as outras opções.