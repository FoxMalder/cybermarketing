const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const babel = require("gulp-babel");
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const runSequence = require('run-sequence');


const paths = require('../paths');
const errorHandler = require('../errorHandler');


// Скрипты
gulp.task('scripts', function() {
  return runSequence(['scripts:desktop', 'scripts:mobile']);
});

// Сборка и минификация скриптов
gulp.task('scripts:desktop', function() {
    return gulp.src(paths.sourceDesktop.scripts)
		.pipe(plumber({errorHandler: errorHandler}))
        .pipe(changed(paths.buildDesktop.scripts))
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.buildDesktop.scripts))
});

// Сборка и минификация скриптов
gulp.task('scripts:mobile', function() {
  return gulp.src(paths.sourceMobile.scripts)
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(changed(paths.buildMobile.scripts))
    .pipe(eslint.format())
    .pipe(babel())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(paths.buildMobile.scripts))
});
