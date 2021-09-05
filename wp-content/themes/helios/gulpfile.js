'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// //var watch 		= require('gulp-watch');
// var size 		= require('gulp-size');
// var cache 		= require('gulp-cache');
// var concat		= require('gulp-concat');
// var rename		= require('gulp-rename');
// var uglify		= require('gulp-uglify');
// var runSequence	= require('run-sequence');
// var nano 		= require('gulp-cssnano');
// var sourcemaps 	= require('gulp-sourcemaps');
// var postcss 	= require('gulp-postcss');
// const sass 		= require('gulp-sass');

// var sass 		= require('gulp-ruby-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var imagemin   	= require('gulp-imagemin');
// var svgmin 		= require('gulp-svgmin');
// var critical 	= require('critical');
// var penthouse 	= require('penthouse'),
//     path 		= require('path');
// var uncss 		= require('gulp-uncss');
// var fs 			= require('fs');
// var browserSync = require('browser-sync').create();
// var imagemin            = require('gulp-imagemin');
// var imageminPngquant = require('imagemin-pngquant');
// var imageminZopfli = require('imagemin-zopfli');
// var imageminGiflossy = require('imagemin-giflossy');
// var imageminJpegRecompress = require('imagemin-jpeg-recompress');

gulp.task('hello', () => {
	console.log('Hello, World!');
	return gulp.src('scss/style.scss');
});

/*
*Quick calls
*/
// gulp.task('default', function(callback){
// 	runSequence('intdevjs', 'intdistjs','inddevjs', 'inddistjs','portdevjs', 'portdistjs', callback);
// });
//
// //index
// gulp.task('indexstyle', function(callback){
// 	runSequence('sassruby', 'uncssindex','uncssindexmiss','criticalindex', callback);
// });
// gulp.task('indexjs', function(callback){
// 	runSequence('inddevjs', 'inddistjs', callback);
// });
// //internal
// gulp.task('intstyle', function(callback){
// 	runSequence('sassruby', callback);
// });
// gulp.task('intjs', function(callback){
// 	runSequence('intdevjs', 'intdistjs', callback);
// });

// //portfolio archive
// gulp.task('portarchstyle', function(callback){
// 	runSequence('portarchuncss','portarchuncssmiss','portarchcritical', callback);
// });
// gulp.task('portjs', function(callback){
// 	runSequence('portarchdevjs', 'portarchdistjs', callback);
// });
// //portfolio single
// gulp.task('portstyle', function(callback){
// 	runSequence('portuncssmisssass','portuncss','portuncssmiss','portcritical', callback);
// });
// gulp.task('portjs', function(callback){
// 	runSequence('portdevjs', 'portdistjs', callback);
// });
// //Slider Template
// gulp.task('slidertempstyle', function(callback){
// 	runSequence('slidertempuncss','slidertempuncssmiss','slidertempcritical', callback);
// });
// gulp.task('slidertempjs', function(callback){
// 	runSequence('slidertempdevjs', 'slidertempdistjs', callback);
// });
// //services Template
// gulp.task('servicestempstyle', function(callback){
// 	runSequence('servicestempuncss','servicestempuncssmiss','servicestempcritical', callback);
// });
// gulp.task('servicestempjs', function(callback){
// 	runSequence('servicestempdevjs', 'servicestempdistjs', callback);
// });
// gulp.task('js', function (cb) {
//   pump([
//         gulp.src('bower_components/loadcss/src/*.js'),
//         uglify(),
//         gulp.dest('bower_components/loadcss/src/')
//     ],
//     cb
//   );
// });
// gulp.task('js', function () {
//   gulp.src('bower_components/loadcss/src/*.js')
//     .pipe(uglify())
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(gulp.dest('bower_components/loadcss/src/'))
// })
// gulp.task('opti', () =>
//     gulp.src('images/**/*')
//         .pipe(imagemin([
//             imagemin.gifsicle({interlaced: true}),
//             imagemin.optipng({optimizationLevel: 5}),
//             imagemin.svgo({
//                 plugins: [
//                         {removeViewBox: true},
//                         {cleanupIDs: false}
//                 ]
//             }),
//             imageminJpegRecompress({
//                 loops:6,
//                 min: 80,
//                 max: 85,
//                 quality:'high'
//             })
//
//         ]))
//         .pipe(gulp.dest('bin/images/'))
//         .pipe(size())
// );
// /** Image Optimization*/
// gulp.task('images', function(){
//     return gulp.src(['images/**/*.{png,jpg,gif}'])
//         .pipe(imagemin())
//         .pipe(gulp.dest('bin/images/'));
// });
// gulp.task('imagesalt', function () {
// 	return gulp.src('images/**/**/**/**/*.{png,jpg,gif}')
// 	.pipe(cache(imagemin({
// 		optimizationLevel: 3,
// 		progressive: true,
// 		interlaced: true
// 	})))
// 	.pipe(gulp.dest('bin/images/'))
// 	.pipe(size());
// });
// gulp.task('svgimages', function () {
//     return gulp.src(['images/**/*.svg'])
//         .pipe(svgmin({
//             plugins: [{
//                 removeViewBox: false
// 	        }, {
// 	                removeUselessStrokeAndFill: false
// 	        }, {
// 	            	removeEmptyAttrs: false
// 	        }]
//         }))
//         .pipe(gulp.dest('bin/images/'));
// });
// gulp.task('watch', function() {
//   gulp.watch('scss/**/*.scss', ['intsass']);
// });
//
// gulp.task('watchhome', function() {
//   gulp.watch('scss/bin/css/homepage/*.scss', ['sasshome']);
// });
//
// /**Index Page Build*/
// gulp.task('inddevjs',function(){
// 	return gulp.src([
//     	'bower_components/jquery/dist/jquery.min.js',
//     	'bower_components/jquery-migrate/jquery-migrate.min.js',
//     	'bower_components/html5shiv/dist/html5shiv.min.js',
//     	'bower_components/foundation/js/vendor/modernizr.js',
//     	//'bower_components/jquery.easing/jquery.easing.min.js',
//     	'bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
//     	'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
//     	//Woocommerce not needed on the homepage
//     	//'//lmseo/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js',
//     	//'//lmseo/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js',
//     	'bower_components/blockUI/jquery.blockUI.js',
//     	//'js/postlike.js',
//     	'bower_components/waypoints/lib/jquery.waypoints.js',
//     	'bower_components/jquery.transit/jquery.transit.js',
//     	//'js/waypoints.js',
//     	//'js/sidebar.js',
//     	//'js/jquery.flexslider.js',
//     	//'js/jquery.custom.js',
//     	'bower_components/foundation/js/foundation/foundation.js',
//     	'bower_components/foundation/js/foundation/foundation.topbar.js',
//     	'bower_components/foundation/js/foundation/foundation.equalizer.js',
//     	//'js/foundation/app.js'
//     	//'bower_components/angular/angular.min.js',
//     	//'bower_components/angular-sanitize/angular-sanitize.min.js',
//     	//'include/widgets/search/js/app.js',
//     	//'include/widgets/search/js/controllers.js',
//     	//'include/widgets/search/js/services.js',
//     ])
// 	.pipe(sourcemaps.init())
// 	.pipe(concat('main.js'))
// 	.pipe(sourcemaps.write('/'))
// 	.pipe(size())
// 	.pipe(gulp.dest('bin/js/dev/index/'));
// });
// gulp.task('inddistjs',function(){
// 	return gulp.src([
//     	'bin/js/dev/index/main.js',
//     ])
// 	.pipe(sourcemaps.init({loadMaps: true}))
// 	.pipe(rename('main.min.js'))
// 	.pipe(uglify())
// 	.pipe(sourcemaps.write('/'))
// 	.pipe(gulp.dest('bin/js/index/'));
// });
//
// //Browsersyn
// gulp.task('serve', ['sass'], function() {
//
//     browserSync.init({
//         proxy: "http://lmseo/"
//     });
//
//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("app/*.html").on('change', browserSync.reload);
// });
// //Sass
// gulp.task('sasshome', function () {
//     return sass(
//     	'scss/bin/css/homepage/*.scss',{
// 	    	sourcemap: true,
// 	    	style: 'expanded',
// 	    	loadPath:['scss/',
// 	    	'bower_components/foundation/scss',
// 	    	'bower_components/hover/scss/',
// 	    	'bower_components/fontawesome/scss',
// 	    	'bower_components/blueimp-gallery/scss/',
// 	    	'bower_components/circularcontentcarousel/scss/'
// 	    	]
//     })
// 	.pipe(autoprefixer('last 2 versions'))
//     .pipe(sourcemaps.init())
//     //.pipe(size())
//     .pipe(nano())
//     .on('error', function (err) {
//       console.error('Error', err.message);
//     })
//    // .pipe(size())
//     .pipe(sourcemaps.write('/'))
// 	//.pipe(size())
//     .pipe(gulp.dest('bin/css/homepage/'))
//     .pipe(size())
//     .pipe(browserSync.reload({stream: true}));
// });
function homesass() {
	return gulp.src('scss/bin/css/homepage/*.scss')
		.pipe(sass({
			includePaths: ['scss/',
				'node_modules/foundation-sites/scss',
				'bower_components/hover/scss/',
				'bower_components/fontawesome/scss',
				'bower_components/blueimp-gallery/scss/',
				'bower_components/circularcontentcarousel/scss/']
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./'));
		// .pipe(gulp.dest('bin/css/homepage/'));
};
exports.homesass = homesass;
gulp.task('watch', () => {
	gulp.watch('scss/bin/css/**/*.scss', (done) => {
		gulp.series(['homesass'])(done);
	});
});
exports.homewatch = function () {
	gulp.watch('scss/bin/css/**/*.scss', {ignoreInitial: true}, function (homesass) {
		// body omitted
		homesass();
	});
};
// gulp.task('sasshome', function () {
// 	return sass(
// 		'scss/bin/css/homepage/*.scss',{
// 			sourcemap: true,
// 			style: 'expanded',
// 			loadPath:['scss/',
// 				'bower_components/foundation/scss',
// 				'bower_components/hover/scss/',
// 				'bower_components/fontawesome/scss',
// 				'bower_components/blueimp-gallery/scss/',
// 				'bower_components/circularcontentcarousel/scss/'
// 			]
// 		})
// 		// .pipe(autoprefixer('last 2 versions'))
// 		// .pipe(sourcemaps.init())
// 		//.pipe(size())
// 		// .pipe(nano())
// 		.on('error', function (err) {
// 			console.error('Error', err.message);
// 		})
// 		// .pipe(size())
// 		// .pipe(sourcemaps.write('/'))
// 		//.pipe(size())
// 		.pipe(gulp.dest('bin/css/homepage/'));
// 		// .pipe(size())
// 		// .pipe(browserSync.reload({stream: true}));
// });
// gulp.task('uncsshome', function () {
//     return gulp.src('bin/css/homepage/style-v6.css')
//         .pipe(uncss({
//             html: ['http://lmseo/']
//         }))
//     .pipe(rename('style.css'))
//     .pipe(gulp.dest('bin/css/homepage/uncss/'))
//     .pipe(size());
// });
// gulp.task('uncsshomemiss', function () {
//     return sass(
//     	'scss/bin/css/homepage/uncss/missing/style.scss',{
// 	    	sourcemap: true,
// 	    	style: 'expanded',
// 	    	loadPath:['scss/',
// 	    	'bower_components/foundation/scss',
// 	    	'bower_components/hover/scss/',
// 	    	'bower_components/fontawesome/scss',
// 	    	'bower_components/blueimp-gallery/scss/',
// 	    	'bower_components/circularcontentcarousel/scss/'
// 	    	]
//     })
//     .pipe(autoprefixer('last 2 versions'))
//     .pipe(sourcemaps.init())
//     //.pipe(size())
//     .pipe(nano())
//     .on('error', function (err) {
//       console.error('Error', err.message);
//     })
//    // .pipe(size())
//     .pipe(sourcemaps.write('/'))
// 	//.pipe(size())
//     .pipe(gulp.dest('bin/css/homepage/uncss/missing/'))
//     .pipe(size())
//     .pipe(browserSync.reload({stream: true}));
// });
// gulp.task('uncssindexcomplete',function(){
// 	return gulp.src([
// 		'bin/css/homepage/uncss/style-v2.css',
// 		'bin/css/homepage/uncss/missing/*.css'
// 		/*'bin/css/index/uncss/missing/sidebar.css',
// 		'bin/css/index/uncss/missing/animations_effects.css'*/
// 	])
// 	.pipe(sourcemaps.init())
// 	.pipe(concat('style.css'))
// 	.pipe(nano())
// 	.pipe(sourcemaps.write('/'))
//         .pipe(rename('style-v2.css'))
// 	.pipe(gulp.dest('bin/css/homepage/uncss/complete/'))
//         .pipe(size());
// });
// gulp.task('criticalhome', function () {
//     critical.generate({
//         base: './',
//         src: 'http://lmseo/',
//         dest: 'bin/css/homepage/critical/styles.min.css.php',
//         css: 'bin/css/homepage/uncss/complete/style-v2.css',
//         dimensions: [{
// 			width: 320,
// 			height: 480
// 			},{
// 			width: 768,
// 			height: 1024
// 			},{
// 			width: 1280,
// 			height: 960
// 		}],
// 		ignore: ['@font-face'],
//         minify: true
//     });
// });
//
// /*
// * Internal Pages Set up
// */
// gulp.task('intdevjs',function(){
// 	return gulp.src([
// 		'js/2.8.3.modernizr.js',
// 		'bower_components/jquery/dist/jquery.js',
// 		'bower_components/jquery-migrate/jquery-migrate.min.js',
// 		'bower_components/jquery.easing/jquery.easing.min.js',
// 		'bower_components/prettyphoto/js/jquery.prettyPhoto.js',
// 		'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
// 		'bower_components/TipTip/jquery.tipTip.minified.js',
// 		'js/postlike.js',
// 		'js/jquery.tools.js',
// 		//'js/jquery.cycle.lite.js',
// 		//'bower_components/waypoints/lib/jquery.waypoints.min.js', not compatible with jquery.custom.js
// 		'js/waypoints.js',
// 		'js/sidebar.js',
// 		'js/jquery.custom.js',
// 		/*js files for the contact form 7 plugin*/
// 		'../../plugins/contact-form-7/includes/js/jquery.form.js',
// 		'../../plugins/contact-form-7/includes/js/scripts.js',
// 		'js/contact-form-7/ajax-loader.js',
// 		//'bower_components/foundation/js/foundation.js',
// 		//'/js/foundation/app.js'
// 		'bower_components/angular/angular.min.js',
//     	'bower_components/angular-sanitize/angular-sanitize.min.js',
//     	'include/widgets/search/js/app.js',
//     	'include/widgets/search/js/controllers.js',
//     	'include/widgets/search/js/services.js',
// 	])
// 	.pipe(sourcemaps.init())
// 	.pipe(concat('main.js'))
// 	.pipe(sourcemaps.write('/'))
// 	.pipe(size())
// 	.pipe(gulp.dest('js/dev/internal/'));
// });
// gulp.task('intdistjs',function(){
// 	return gulp.src([
// 		'js/dev/internal/main.js',
// 	])
// 	.pipe(sourcemaps.init({loadMaps: true}))
// 	.pipe(rename('main.min.js'))
// 	.pipe(uglify())
// 	.pipe(sourcemaps.write('/'))
// 	.pipe(gulp.dest('bin/js/internal/'));
// });
// gulp.task('intsass', function () {
//     return sass(
//     	'scss/style.scss',{
// 	    	sourcemap: true,
// 	    	style: 'expanded',
// 	    	loadPath:['scss/',
// 	    	'bower_components/foundation/scss',
// 	    	'bower_components/hover/scss/',
// 	    	'bower_components/fontawesome/scss',
// 	    	'bower_components/blueimp-gallery/scss/',
// 	    	'bower_components/circularcontentcarousel/scss/']
//     })
// 	.pipe(autoprefixer('last 2 versions'))
//     .pipe(sourcemaps.init())
//     .pipe(nano())
//     .on('error', function (err) {
//       console.error('Error', err.message);
//     })
// 	.pipe(sourcemaps.write())
//     .pipe(gulp.dest('./'));
// });
