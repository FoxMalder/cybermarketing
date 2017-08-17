"use strict";

/*!
 * Plugin: MeeInk
 * Version: 1.0.0
 * Author: Vladislav Bezenson
 *
 * @license: https://github.com/inferusvv/MeeInk/blob/master/LICENSE.MD
 * https://github.com/inferusvv/MeeInk
 */

;(function ($, window, document, undefined) {

  "use strict";

  var pluginName = "meeInk",
      defaults = {
    animationClass: 'mee-ink-animated mee-ink-animation',
    elementClass: 'mee-ink-el',
    inkClass: 'mee-ink',
    overflowHiddenClass: 'mee-ink-overflow-hidden',
    positionRelativeClass: 'mee-ink-pos-relative'
  },
      interactionEvent = 'ontouchstart' in window || navigator.maxTouchPoints ? 'touchstart' : 'click';

  function Plugin(element, options) {
    this.element = element;
    this.$element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {
    init: function init() {
      this.injectInk();
      this.$ink = $(this.element).find('.' + this.settings.inkClass);

      this.$element.addClass(this.settings.elementClass);
      this.$element.on(interactionEvent, $.proxy(this._onClick, this));

      if (this.$element.css('position') === 'static') {
        this.$element.addClass(this.settings.positionRelativeClass);
      }
      if (this.$element.css('overflow') !== 'hidden') {
        this.$element.addClass(this.settings.overflowHiddenClass);
      }
    },

    injectInk: function injectInk() {
      if (this.$element.find('.' + this.settings.inkClass).length === 0) {
        this.$element.prepend('<span class="' + this.settings.inkClass + '"></span>');
      }
    },

    setInkSize: function setInkSize(width, height) {
      height = typeof height !== 'undefined' ? height : width;

      this.$ink.css({
        height: height,
        width: width
      });
    },

    setInkPosition: function setInkPosition(x, y) {
      this.$ink.css({
        top: y,
        left: x
      });
    },

    getInkSize: function getInkSize() {
      return Math.max(this.$element.outerWidth(), this.$element.outerHeight());
    },

    getInkPosition: function getInkPosition(event) {
      var position = {};

      position.x = (event.originalEvent.pageX || event.originalEvent.touches[0].pageX) - this.$element.offset().left - this.$ink.width() / 2;
      position.y = (event.originalEvent.pageY || event.originalEvent.touches[0].pageY) - this.$element.offset().top - this.$ink.height() / 2;

      return position;
    },

    _onClick: function _onClick(event) {
      this.$ink.removeClass(this.settings.animationClass);

      this.setInkSize(this.getInkSize());

      var position = this.getInkPosition(event);
      this.setInkPosition(position.x, position.y);

      this.$ink.addClass(this.settings.animationClass);
    }
  });

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

$(document).ready(function () {
  $('.btn').meeInk();
});
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