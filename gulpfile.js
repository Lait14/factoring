var gulp = require('gulp'),
			refresh = require('gulp-refresh'),
			autoprefixer = require('gulp-autoprefixer'),
			uncss = require('gulp-uncss');
gulp.task('css', ['boots'], function () {
	return gulp.src('app/css/*.css')
	.pipe(uncss({
		html: ['app/index.html']
		}))
	.pipe(autoprefixer({
		 browsers: ['last 10 versions'],
		 cascade: false
		  }))
	.pipe(refresh())
	.pipe(gulp.dest('dist'));
		   });

gulp.task('boots', function () {
	return gulp.src('app/libs/bootstrap/css/bootstrap.css')
	.pipe(uncss({
		html: ['app/index.html']
		}))
	.pipe(gulp.dest('dist'));
		   });

		
gulp.task('watch', () => {
	refresh.listen()
	gulp.watch('app/css/*.css', ['css'])
	});

gulp.task('default', [ 'css','watch'], function() {

});

 

        

