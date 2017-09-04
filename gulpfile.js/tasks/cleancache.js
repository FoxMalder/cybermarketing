const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');
const browserSync = require("browser-sync");
const reload = browserSync.reload;

const paths = require('../paths');


// Очистка кэша для CSS- и JS-файлов
gulp.task('cleancache', function() {
  gulp.src('dist/**/*.html')
    .pipe(cachebust())
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});
