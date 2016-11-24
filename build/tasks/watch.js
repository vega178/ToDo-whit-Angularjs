var gulp = require('gulp');
var paths = require('../paths');//rutas

gulp.task('watch', ['build'], function(){
    gulp.watch([ paths.sass ],['sass']);//[ paths.sass ] rutas donde se encuentran los archivos, ['sass'] tarea de sass 
});