let htmlmin = require('gulp-htmlmin');
let gulp = require('gulp');


gulp.task('minify', function() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true, caseSensitive: true}))
    .pipe(gulp.dest('dist'))
});