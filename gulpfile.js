var gulp = require("gulp");
var gutil = require("gulp-util");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('browserify', ['babel'], function() {
    gulp.src('js/index.js')
      .pipe(browserify({
        insertGlobals : true
      }))
      .on('error', handleError)
      .pipe(gulp.dest('./dist'));
});

gulp.task("babel", function () {
  return gulp.src(["js/**/*.jsx"])
    .pipe(babel())
    .on('error', handleError)
    .pipe(gulp.dest("js"));
});

gulp.task("watch", function () {
	gulp.watch('js/components/*.jsx', ['browserify']);
  gulp.watch('js/services/*.js', ['browserify']);
  gulp.watch('js/index.jsx', ['browserify']);
});