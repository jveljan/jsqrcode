var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

var paths = {
  scripts: [
	'src/grid.js',
	'src/version.js',
	'src/detector.js',
	'src/formatinf.js',
	'src/errorlevel.js',
	'src/bitmat.js',
	'src/datablock.js',
	'src/bmparser.js',
	'src/datamask.js',
	'src/rsdecoder.js',
	'src/gf256poly.js',
	'src/gf256.js',
	'src/decoder.js',
	'src/qrcode.js',
	'src/findpat.js',
	'src/alignpat.js',
	'src/databr.js'
  ]
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      //.pipe(uglify())
      .pipe(concat('all.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts']);