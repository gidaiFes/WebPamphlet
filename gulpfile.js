var gulp = require('gulp');
var browserify = require('browserify');
var sass = require('gulp-sass')
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var cssSrc = './client/assets/sass'
var cssDest = './client/assets/css'

gulp.task('sass',function(){
  gulp.src(cssSrc + '/*.sass')
    .pipe(sass())
    .pipe(gulp.dest(cssDest));
});

gulp.task('browserify', function(){
  var b = browserify({
    entries: ['./client/scripts/index.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./client/build'));
});
