'use strict';

const CONFIG = {
    NAME: 'btn-menu',
    'AUTOPREFIXER': ['last 10 version', 'safari 5', 'ie 8', 'ie 9', 'ie 10', 'opera 12.1', 'ios 6', 'android 4'],//['last 10 versions']
    ONLY_MIN: true
};
const DEV = {
    CSS: ['./blocks/' + CONFIG.NAME + '/css/'],
    JS: ['./blocks/' + CONFIG.NAME + '/js/'],
    ROOT: './',
};
const SRC = {
    SCSS: ['./blocks/' + CONFIG.NAME + '/scss/' + CONFIG.NAME + '.scss'],
    JS: ['./blocks/' + CONFIG.NAME + '/js/src/' + CONFIG.NAME + '.js'],
};

const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    htmlmin = require('gulp-htmlmin'),
    clean = require('gulp-clean'),
    scss = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    mozjpeg = require('imagemin-mozjpeg'),
    webp = require('imagemin-webp'),
    extReplace = require("gulp-ext-replace"),
    connect = require('gulp-connect-php'),//https://www.npmjs.com/package/gulp-connect-php
    uglify = require('gulp-uglify-es').default;



gulp.task('scss', function () {
    return gulp.src(SRC.SCSS)
        .pipe(scss())
        .pipe(concat(CONFIG.NAME + '.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: CONFIG.AUTOPREFIXER,
            cascade: false,
            grid: true,
            // grid: 'autoplace',
            remove: false
        }))
        .pipe(gulp.dest(DEV.CSS))
        .pipe(browserSync.stream());
});



gulp.task('scss_min', function () {
    return gulp.src(SRC.SCSS)
        .pipe(scss())
        .pipe(cleanCss({
            compatibility: 'ie8',
            level: { 1: { specialComments: 0 } },/* format: 'beautify' */
        })) // Минификация css
        .pipe(concat(CONFIG.NAME + '.css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: CONFIG.AUTOPREFIXER,
            cascade: false,
            grid: true,
            // grid: 'autoplace',
            remove: false
        }))
        .pipe(gulp.dest(DEV.CSS))
        .pipe(browserSync.stream());
});



gulp.task('js', function () {
    return gulp.src(SRC.JS)
        .pipe(concat(CONFIG.NAME + '.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(DEV.JS));
});



gulp.task('js_min', function () {
    return gulp.src(SRC.JS)
        .pipe(concat(CONFIG.NAME + '.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(DEV.JS));
});



gulp.task('plug', function () {
    return gulp.src('.', {allowEmpty: true});
});



// PHP Gulp Server + watching scss/html files
gulp.task('connect-sync', function (done) {
    connect.server({}, function () {
        browserSync({            
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch(DEV.ROOT + 'index.php').on('change', function () {
        browserSync.reload();
    });
    (CONFIG.ONLY_MIN)?gulp.plug:gulp.watch(SRC.JS, gulp.series('js'));
    gulp.watch(SRC.JS, gulp.series('js_min'));
    (CONFIG.ONLY_MIN)?gulp.plug:gulp.watch(SRC.SCSS, gulp.series('scss'));
    gulp.watch(SRC.SCSS, gulp.series('scss_min'));
    done();
});



// Static Server + watching scss/html files
gulp.task('run_dev_server', function (done) {
    browserSync.init({ // browser sync
        server: DEV.ROOT
    });
    (CONFIG.ONLY_MIN)?gulp.plug:gulp.watch(SRC.JS, gulp.series('js'));
    gulp.watch(SRC.JS, gulp.series('js_min'));
    (CONFIG.ONLY_MIN)?gulp.plug:gulp.watch(SRC.SCSS, gulp.series('scss'));
    gulp.watch(SRC.SCSS, gulp.series('scss_min'));
    done();
});



gulp.task('default', gulp.series('scss', 'scss_min', 'js', 'js_min', 'connect-sync'/* , 'run_dev_server' */));
