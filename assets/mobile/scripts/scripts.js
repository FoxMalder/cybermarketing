
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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProgressCircle = function () {
  function ProgressCircle(percent, radius, elementClass) {
    _classCallCheck(this, ProgressCircle);

    this._percent = percent;
    this._radius = radius;
    this._elementClass = elementClass;
  }

  _createClass(ProgressCircle, [{
    key: 'calcDashOffset',
    value: function calcDashOffset() {
      var circumference = Math.PI * (2 * this.radius);
      return Math.floor(circumference - this.percent / 100 * circumference);
    }
  }, {
    key: 'createCSS',
    value: function createCSS() {
      document.querySelectorAll('.' + this._elementClass + ' .donut__svg .donut__svg__circle--one')[0].style.strokeDashoffset = this.calcDashOffset();
    }

    // updateText() {
    //   document.querySelectorAll(`.${this.elementClass} .js-donut-figure`)[0].innerText = this.percent;
    // }

  }, {
    key: 'updateFigure',
    value: function updateFigure(newStat) {
      this._percent = newStat;
      this.updateText();
      this.createCSS();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      this.updateText();

      setTimeout(function () {
        _this.createCSS();
      }, 1000);
    }
  }, {
    key: 'percent',
    get: function get() {
      return this._percent;
    }
  }, {
    key: 'radius',
    get: function get() {
      return this._radius;
    }
  }, {
    key: 'elementClass',
    get: function get() {
      return this._elementClass;
      return document.getElementsByClassName(this._elementClass)[0];
    }
  }]);

  return ProgressCircle;
}();

var progress = new ProgressCircle(47, 90, 'donut');
progress.init();
'use strict';

// Сворачиваем и разворачиваем список уроков


(function () {

  $('._more-link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("more-link--expand");
    $(this).parents('.course-module').find('._course-module__items').toggleClass("folded").toggleClass("unfolded");

    var close = $(this).attr("data-text-close");
    var open = $(this).attr("data-text-open");

    if ($(this).parents('.course-module').find('._course-module__items').hasClass('folded')) {
      if (close) {
        $(this).html(close);
      } else {
        $(this).html('Свернуть уроки');
      }
    } else {
      if (open) {
        $(this).html(open);
      } else {
        $(this).html('Показать уроки');
      }
    }
  });

  $('.course-module').each(function () {
    var $e = $(this);
    if ($e.find('._course-module__items').hasClass('folded')) {
      $e.find('._more-link').toggleClass("more-link--expand").html('Свернуть уроки');
    }
  });
})();

(function () {

  $('.comment').each(function () {
    var $e = $(this);
    $e.find('._comment__answer').hide();
  });

  $('._more-comment').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("more-link--expand");
    $(this).parents('.comment').find('._comment__answer').toggleClass("folded").toggleClass("unfolded").slideToggle();

    var close = $(this).attr("data-text-close");
    var open = $(this).attr("data-text-open");

    if ($(this).parents('.comment').find('._comment__answer').hasClass('folded')) {
      if (close) {
        $(this).html(close);
      } else {
        $(this).html('Скрыть ответ');
      }
    } else {
      if (open) {
        $(this).html(open);
      } else {
        $(this).html('Показать ответ');
      }
    }
  });
})();