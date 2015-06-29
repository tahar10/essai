var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Server
// ------------------------------
gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./*.css', ['styles']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});


// Styles
// ------------------------------
gulp.task('styles', function() {
	gulp.src('./*.css')
		.pipe(
			autoprefixer({
				browsers: ['> 5%', 'IE 9']
			})
		)
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.stream());
});
