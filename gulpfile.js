var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('autoprefix', function() {
	return gulp.src('resources/css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('resources/css/'));
});

gulp.task('browserSync', function() {
	browserSync.init(['index.html', 'resources/css/*.css', 'resources/js/*.js'], {
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('watch', ['browserSync'], function() {
	gulp.watch(['index.html', './resources/css/*.css', './resources/js/*.js']);
});
