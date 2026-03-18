const _ = require('lodash')
setInterval(() => console.log(_.random(50, 60)), 2000)


/* instalamos 2 dependencias, o lodash e o nodemon, o nodemon é para reiniciar o servidor automaticamente quando houver mudanças no código, e o lodash é uma biblioteca
* de utilidades que facilita a manipulação de arrays, objetos, strings, etc. No exemplo acima, estamos usando a função random do lodash para gerar um número aleatório entre
* 50 e 60 a cada 2 segundos.*/