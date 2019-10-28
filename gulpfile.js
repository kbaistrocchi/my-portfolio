const gulp = require('gulp');
const terser = require('gulp-terser'),
rename = require('gulp-rename'),
// sass = require('gulp-sass'),
cssnano = require('gulp-cssnano'),
autoprefixer = require('gulp-autoprefixer'),
eslint = require('gulp-eslint'),
browserSync = require('browser-sync').create()

gulp.task('eslint', function() {
    return gulp
    .src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})


gulp.task('cssMin', function() {
    return gulp
    .src('style.css')
    .pipe(
        autoprefixer())
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream())
    
})

gulp.task('scripts', function() {
    return gulp
    .src('main.js')
    .pipe(terser())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
  
})


gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    // watch any js files and if there's a change, run my series of scripts defined above
    gulp.watch('main.js', gulp.series(['scripts', 'eslint']) ).on('change', browserSync.reload)
    // run sass above if changed occur in sass files
    gulp.watch('style.css', gulp.series('cssMin')).on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)

     
})