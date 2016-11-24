var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');// me permite correr varias tareas en secuencia 
var browserSync = require('browser-sync');

var paths = require('../paths');// donde se encuentrar las rutas de archivos

gulp.task('build', function (callback) {
  return runSequence(
    ['sass'],// tareas
    callback
  );
});
gulp.task('sass', function(){
    return gulp.src('sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'));//Carpeta donde me va dejar el archivo .css 
});
gulp.task('default', ['sass']);
