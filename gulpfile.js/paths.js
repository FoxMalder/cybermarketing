/*
   Пути к файлам, с котороыми работаем:
   сборка, исходники и файлы для watch
*/
const dist = 'dist/';
const desktop  = 'desktop/';
const mobile  = 'mobile/';


module.exports = {

  // Исходники версии для компа
  sourceDesktop: {
    templates:       [desktop + 'templates/pages/'],
    index:           [desktop + 'templates/'],
    scripts:         [desktop + 'scripts/**/*.js', desktop + 'templates/**/*.js'],
    styles:          [desktop + 'styles/'],
    images:          [desktop + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
    imagesblocks:    [desktop + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
    resources:       [desktop + 'resources/**/*']
  },

  // Для вотчеров версии для компа
  watchDesktop: {
    templates:       [desktop + 'templates/**/*.html'],
    scripts:         [desktop + 'scripts/**/*.js', desktop + 'templates/**/*.js'],
    styles:          [desktop + 'styles/**/*.scss', desktop + 'templates/**/*.scss'],
    images:          [desktop + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
    imagesblocks:    [desktop + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)'],
    resources:       [desktop + 'resources/**/*.*']
  },

  // Куда всё собирать-то (версия для компа)?
  buildDesktop: {
    html:            dist + 'desktop/',
    main:            dist,
    scripts:         dist + 'assets/desktop/scripts',
    styles:          dist + 'assets/desktop/styles',
    images:          dist + 'assets/images',
    resources:       dist
  },


  // Исходники версии для компа
  sourceMobile: {
    templates:       [mobile + 'templates/pages/'],
    scripts:         [mobile + 'scripts/**/*.js', mobile + 'templates/**/*.js'],
    styles:          [mobile + 'styles/'],
  },

  // Для вотчеров версии для компа
  watchMobile: {
    templates:       [mobile + 'templates/**/*.html'],
    scripts:         [mobile + 'scripts/**/*.js', mobile + 'templates/**/*.js'],
    styles:          [mobile + 'styles/**/*.scss', mobile + 'templates/**/*.scss'],
  },

  // Куда всё собирать-то (версия для компа)?
  buildMobile: {
    html:            dist + 'mobile/',
    scripts:         dist + 'assets/mobile/scripts',
    styles:          dist + 'assets/mobile/styles',
  }
};
