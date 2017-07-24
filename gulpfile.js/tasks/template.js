const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const fileinclude = require("gulp-file-include");

const paths = require('../paths');
const errorHandler = require('../errorHandler');


// Шаблонизация
gulp.task('html:desktop', function() {
  return gulp.src(paths.sourceDesktop.templates + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'desktop/templates'
    }))
    .pipe(gulp.dest(paths.buildDesktop.html));
});

// Шаблонизация
gulp.task('html:mobile', function() {
  return gulp.src(paths.sourceMobile.templates + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'mobile/templates'
    }))
    .pipe(gulp.dest(paths.buildMobile.html));
});

// Шаблонизация
gulp.task('html:main', function() {
  return gulp.src(paths.sourceDesktop.index + '*.html')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'desktop/templates'
    }))
    .pipe(gulp.dest(paths.buildDesktop.main));
});
