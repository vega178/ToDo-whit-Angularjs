var gulp = require('gulp');


gulp.task('watch', ['sass'], function(){
    gulp.watch('sass', ['gulp']);
});