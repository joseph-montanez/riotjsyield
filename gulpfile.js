var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    exec = require('gulp-exec'),
    riot = require('gulp-riot');

gulp.task('riot', function () {
    var options = {
        continueOnError: true, // default = false, true means don't emit error event
        pipeStdout: false // default = false, true means stdout is written to file.contents
    };
    return gulp.src('components/**/*.html')
        .pipe(watch('components/**/*.html'))
        .on('change', function (e) {
            console.log((new Date()) + ' compiling web components...');
        })
        .pipe(plumber())
        .pipe(riot())
        .pipe(rename({
            extname: ".js"
        }))
        .pipe(gulp.dest('components/compiled'));
});

gulp.task('default',['riot']);