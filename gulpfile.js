"use strict";

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    cssunit = require('gulp-css-unit'),
    gutil = require("gulp-util"),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    notifier = require('node-notifier'),
    webpack = require("webpack"),
    fileinclude = require('gulp-file-include'),
    markdown = require('markdown');

const webpackConfig = require('./webpack.config.js');

let statsLog = {
    colors: true,
    reasons: true
};

//webpack complete javascript
gulp.task('scripts', (done) => {

    webpack(webpackConfig, onComplete);

    function onComplete(error, stats) {
        if (error) {
            onError(error);
        } else if (stats.hasErrors()) {
            onError(stats.toString(statsLog));
        } else {
            onSuccess(stats.toString(statsLog));
        }
    }

    function onError(error) {
        let formatedError = new gutil.PluginError('webpack', error);
        notifier.notify({
            title: `Error: ${formatedError.plugin}`,
            message: formatedError.message
        });
        done(formatedError);
    }

    function onSuccess(detailInfo) {
        gutil.log('[webpack]', detailInfo);
        done();
    }

});


// Compile Sass
gulp.task('sass', () => {
    gulp.src('./src/sass/main.scss')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssunit({
            type: 'px-to-rem',
            rootSize: 16
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'))
});

// Compile min Sass
gulp.task('sassMin', () => {
    gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssunit({
            type: 'px-to-rem',
            rootSize: 16
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('fileinclude', function () {
    gulp.src('./src/html/*.html')
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('fileincludeSpain', function () {
    gulp.src('./src/html/spain/*.html')
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./sp/'));
});

gulp.task('fileincludeFrance', function () {
    gulp.src('./src/html/france/*.html')
        .pipe(fileinclude({
            filters: {
                markdown: markdown.parse
            }
        }))
        .pipe(gulp.dest('./fr/'));
});



gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false,
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, // tunnel: "s7kind", // Demonstration page: http://projectname.localtunnel.me
    })
});

gulp.task('default', ['scripts', 'sass', 'browser-sync'], () => {

    gulp.watch('./src/sass/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('./src/js/**', ['scripts']).on('change', browserSync.reload);
    gulp.watch('./src/html/**', ['fileinclude']).on('change', browserSync.reload);
    gulp.watch('./src/html/spain/**', ['fileincludeSpain']).on('change', browserSync.reload);
    gulp.watch('./src/html/france/**', ['fileincludeFrance']).on('change', browserSync.reload);
});

gulp.task('host', ['scripts', 'sass'], () => {
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./src/js/**', ['scripts']);
});

gulp.task('build', ['scripts', 'sassMin']);

