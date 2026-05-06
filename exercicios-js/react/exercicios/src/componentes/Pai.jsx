import React from 'react'
import { childrenWithProps } from '../utils/utils'
// import Filho from './Filho'

export default props =>
    <div>
      <h1>{props.nome} {props.sobrenome}</h1>
      <h2>Filhos</h2>
      <ul>
          {childrenWithProps(props)}
      </ul>
    </div>


 /* "Carla" vai sobrescrever o nome do  filho no caso Carla que e passada depois do {...props}, se fosse antes do {...props}, o nome "Carla" não seria sobrescrito,
 e sim o nome do pai.
 Props e somente leitura, o state é que pode ser modificado */