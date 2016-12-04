
var gulp = require('gulp');

var clean = require('gulp-clean');
var transport = require('gulp-seajs-transport');
var concat = require('gulp-seajs-concat');

var uglify = require('gulp-uglify');

gulp.task('default', ['clean'], function () {
	gulp.src('./public/src/**/*.js', {base: './public/src'})
		.pipe(transport({
			idleading: './public/dist/'
		}))
		.pipe(concat())
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist'));
});

gulp.task('clean', function () {
	return gulp.src('./public/dist')
			   .pipe(clean());
});