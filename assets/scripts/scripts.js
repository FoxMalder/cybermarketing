'use strict';

// подсвечиваем ссылки с одинаковым адресом
if ($) $(function () {

  $('a').hover(function () {
    if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
      $('a[href="' + $(this).attr('href') + '"]').addClass('hover');
    }
  }, function () {
    $('a').removeClass('hover');
  });
});
// /подсвечиваем ссылки с одинаковым адресом
'use strict';

$(document).ready(function () {

  // спойлер-блок на странице
  $('._foldable__content').hide();
  $('._foldable__control').click(function () {
    $(this).toggleClass("folded").toggleClass("unfolded").next().slideToggle();
    var close = $('._foldable__link').attr("data-text-close");
    var open = $('._foldable__link').attr("data-text-open");
    if ($(this).hasClass('folded')) {
      if (close) {
        $('._foldable__link').html(close);
      } else {
        $('._foldable__link').html('Свернуть раскрывающийся контент');
      }
    } else {
      if (open) {
        $('._foldable__link').html(open);
      } else {
        $('._foldable__link').html('Показать раскрывающийся контент');
      }
    }
  });
  // /спойлер-блок на странице
});