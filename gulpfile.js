'use strict';

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync').create(),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
    compile      = require('gulp-ejs-template'),
	autoprefixer = require('gulp-autoprefixer');

/*
*  sass preprocessing
*  add autoprefixes
*/
gulp.task('sass', function () {
	
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer([
			'last 2 versions',
			'> 1%',
			'ie 8'], {
				cascade: true
			}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));

});

/*
*  Concat scripts to one file 
*/
// gulp.task('scripts', function() {
//
// 	return gulp.src([
// 		'app/libs/jquery/dist/jquery.min.js',
// 		'app/libs/bootstrap/dist/js/bootstrap.min.js',
// 		'app/libs/animate-css/animate-css.js',
// 		'app/libs/bootstrap/js/carousel.js',
// 		'app/libs/parallax.js-1.4.2/parallax.min.js',
// 		'app/js/script.js'
// 		])
// 		.pipe(uglify())
// 		.pipe(concat('common.min.js'))
// 		.pipe(gulp.dest('app/js'));
//
// });

/*
*  compressing css files
*/
gulp.task('css-libs', ['sass'], function() {
		
		return gulp.src([
			'app/css/header.css',
			'app/css/main.css',
			'app/css/media.css'
			])
			.pipe(cssnano())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('app/css/'));

});

/*
*  auto update
*/
gulp.task('browser-sync', function() {	
	browserSync.init({
			server: {
				baseDir: "app/"
			}
	});
});

gulp.task('clean', function (){
	return del.sync('dist');
});

gulp.task('clear', function (){
	return cache.clearAll();
});

/*
* compressing img and png files
*/
gulp.task('img', function(){

	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/images'));

});

gulp.task('watch', ['css-libs', 'compile-templates', 'browser-sync'], function(){

	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/sass/**/*.sass', ['sass']);

});

gulp.task('compile-templates', function () {
	gulp.src([
		'app/js/templates/*.ejs'
	])
		.pipe(compile({ moduleName: 'templates' }))
		.pipe(gulp.dest('app/js'));
});

/* 
*  Building project
*/
gulp.task('build', ['clean', 'img', 'scripts'], function(){

	var buidCSS = gulp.src([
		'app/css/main.min.css',
		'app/css/media.min.css',
		'app/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));


	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'));

});


