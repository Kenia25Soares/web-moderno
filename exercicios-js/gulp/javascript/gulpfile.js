const { series } = require('gulp')
//const { series, parallel } = require('gulp');
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
   return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', (err) => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    return cb()
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)
// Pode ser usado parallel, mas nesse caso o resultado pode ser imprevisível, pois as tarefas podem ser executadas em ordem diferente da escrita. O ideal é usar series para
//  garantir a ordem de execução.
// exports.default = parallel(transformacaoJS, fim)
