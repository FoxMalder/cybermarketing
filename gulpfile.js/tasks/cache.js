const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');
const browserSync = require("browser-sync");
const reload = browserSync.reload;

const paths = require('../paths');


// Очистка кэша для CSS- и JS-файлов
gulp.task('cache', function() {
  gulp.src(paths.buildDesktop + 'dist/**/*.html')
    .pipe(cachebust())
    .pipe(gulp.dest(paths.buildDesktop.html))
    .pipe(reload({stream: true}));
});
