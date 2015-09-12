const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browserify', ['babel'], () => {
    gulp.src('babel/index.js')
      .pipe(browserify({
        insertGlobals: true
      }))
      .on('error', handleError)
      .pipe(gulp.dest('./dist'));
  });

gulp.task('babel', () => {
  return gulp.src(['js/**/*.jsx'])
    .pipe(babel())
    .on('error', handleError)
    .pipe(gulp.dest('babel'));
});

gulp.task('watch', () => {
  gulp.watch('js/components/*.jsx', ['browserify']);
  gulp.watch('js/services/*.js', ['browserify']);
  gulp.watch('js/index.jsx', ['browserify']);
});
