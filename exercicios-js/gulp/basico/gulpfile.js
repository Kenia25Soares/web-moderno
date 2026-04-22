const gulp = require('gulp')
//const series = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('TarefaAntes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

// function copiar(cb) {
//     console.log('Tarefa de copiar!')
//     return cb()
// }
function copiar(cb) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt') // Todos os arquivos .txt dentro de pastaA e suas subpastas
        // .pipe(imagePelaMetade())  // Serie de transformações
        // .pipe(imageEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

exports.default = gulp.series(
   gulp.parallel(antes1, antes2),
    copiar,
    fim,
  )

// gulp.task('default', () => {
//     gulp.start('copiar', 'fim')
// })

// gulp.task('copiar', ['antes1', 'antes2'], () => {
//     return gulp.src('pastaA/**/*.txt')
//         // .pipe(transformacao1())
//         // .pipe(transformacao2())
//         .pipe(gulp.dest('pastaB'))
// })

// gulp.task('antes1', () => {
//     console.log('Antes 1!!!')
// })

// gulp.task('antes2', () => {
//     console.log('Antes 2!!!')
// })

// gulp.task('fim', ['fim1', 'fim2'])

// gulp.task('fim1', () => {
//     console.log('Fim 1!!!')
// })

// gulp.task('fim2', () => {
//     console.log('Fim 2!!!')
// })