const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const fileinclude = require("gulp-file-include");
const runSequence = require('run-sequence');
const browserSync = require("browser-sync");
const reload = browserSync.reload;

const paths = require('../paths');
const errorHandler = require('../errorHandler');


// Шаблонизация
gulp.task('html', function() {
  return runSequence(['html:desktop', 'html:mobile', 'html:main'], browserSync.reload);
});

// Шаблонизация для компа
gulp.task('html:desktop', function() {
  return gulp.src(paths.sourceDesktop.templates + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'desktop/templates'
    }))
    .pipe(gulp.dest(paths.buildDesktop.html));
});

// Шаблонизация для мобил
gulp.task('html:mobile', function() {
  return gulp.src(paths.sourceMobile.templates + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'mobile/templates'
    }))
    .pipe(gulp.dest(paths.buildMobile.html));
});

// Шаблонизация базовых странц
gulp.task('html:main', function() {
  return gulp.src(paths.sourceDesktop.index + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'desktop/templates'
    }))
    .pipe(gulp.dest(paths.buildDesktop.main));
});
