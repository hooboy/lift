const gulp = require('gulp');
const compass = require('gulp-compass');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
// const bs = require('browser-sync');
const plumber = require('gulp-plumber');
const assets = require('./build/paths');

gulp.task('sass', function() {
    return gulp.src('./assets/sass/**/*.scss')
    .pipe(plumber())
    .pipe(compass({
      css: './assets/css',
      sass: './assets/sass',
      image: './assets/images'
    }))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(size())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', ['sass'], function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('js', function() {
    return gulp.src('./js/application.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify({
        compress: {
            warnings: false,
            drop_console: true
        },
        output: {
            comments: false
        },
        mangle: {
            keep_fnames: true
        }
    }))
    .pipe(size())
    .pipe(gulp.dest('./js'));
});

gulp.task('js:watch',['js'], function() {
    gulp.watch('./js/**/*.js', ['js']);
});
