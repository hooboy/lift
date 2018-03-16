var gulp = require('gulp');
var compass = require('gulp-compass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');
var bs = require('browser-sync');
var plumber = require('gulp-plumber');


gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      css: './css',
      sass: './sass',
      image: './images'
    }))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(size())
    .pipe(gulp.dest('./css'));
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

gulp.task('sass:watch', ['sass'], function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('js:watch',['js'], function() {
    gulp.watch('./js/**/*.js', ['js']);
});
