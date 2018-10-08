var gulp = require('gulp');
var sass = require('gulp-sass');

var config = require('./gulpconfig.json');

gulp.task('sass', function(){
  return gulp.src(config.sassFileSources)
  .pipe(sass(config.sassOptions).on('error', sass.logError))
  .pipe(gulp.dest("./static/theme-flex"));
});

gulp.task('default', function() {
  gulp.watch(config.sassFileSources, ['sass']);
});

