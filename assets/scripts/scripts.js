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

/*
 By Osvaldas Valutis, www.osvaldas.info
 Available for use under the MIT License
 */

'use strict';

;(function ($, window, document, undefined) {
  $('.custom-file').each(function () {
    var $input = $('.custom-file-input'),
        $label = $input.next('.custom-file-control'),
        labelVal = $label.html();

    $input.on('change', function (e) {
      var fileName = '';

      if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else if (e.target.value) fileName = e.target.value.split('\\').pop();

      if (fileName) $label.find('span').html(fileName);else $label.html(labelVal);
    });

    // Firefox bug fix
    $input.on('focus', function () {
      $input.addClass('has-focus');
    }).on('blur', function () {
      $input.removeClass('has-focus');
    });
  });
})(jQuery, window, document);
'use strict';

$('#commentnew').keyup(function () {
  if ($(this).val().length != 0) $('#submit').attr('disabled', false);else $('#submit').attr('disabled', true);
});