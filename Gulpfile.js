var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function(){
   return gulp.src('css/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});
