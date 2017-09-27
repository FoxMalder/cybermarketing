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
"use strict";

//! v.1.1.1, http://ilyabirman.net/projects/emerge/
jQuery && (!function (t) {
  t(function () {
    t.expr[":"].uncached = function (a) {
      if (!t(a).is('img[src!=""]')) return !1;
      var e = new Image();
      return e.src = a.src, !e.complete;
    };
    var a = [],
        e = 500,
        r = !1,
        i = ["backgroundImage", "borderImage", "borderCornerImage", "listStyleImage", "cursor"],
        o = /url\(\s*(['"]?)(.*?)\1\s*\)/g,
        n = 0,
        s = function s(t, a, e, r, i) {
      var o = "emergeRotate" + ++n;
      return "<style>@-webkit-keyframes " + o + " { from { -webkit-transform: rotate(" + 360 * e + "deg); } to { -webkit-transform: rotate(" + 360 * !e + "deg); }  } @keyframes " + o + " { from { transform: rotate(" + 360 * e + "deg); } to { transform: rotate(" + 360 * !e + 'deg); }  } </style><div style="position: absolute; transition: opacity ' + i + 'ms ease-out"><div style="position: absolute; left: 50%; top: 50%; margin: -' + t + 'px"><svg xmlns="http://www.w3.org/2000/svg" width="' + 2 * t + '" height="' + 2 * t + '"viewBox="0 0 24 24" style="-webkit-animation: ' + o + " " + r + "ms linear infinite;animation: " + o + " " + r + 'ms linear infinite"><path fill="' + a + '" d="M17.25 1.5c-.14-.06-.28-.11-.44-.11-.55 0-1 .45-1 1 0 .39.23.72.56.89l-.01.01c3.2 1.6 5.39 4.9 5.39 8.71 0 5.38-4.37 9.75-9.75 9.75S2.25 17.39 2.25 12c0-3.82 2.2-7.11 5.39-8.71v-.02c.33-.16.56-.49.56-.89 0-.55-.45-1-1-1-.16 0-.31.05-.44.11C2.9 3.43.25 7.4.25 12c0 6.49 5.26 11.75 11.75 11.75S23.75 18.49 23.75 12c0-4.6-2.65-8.57-6.5-10.5z"></path></svg></div></div>';
    };
    if (window.navigator && "preview" === window.navigator.loadPurpose) return t(".emerge").css("transition", "none"), t(".emerge").css("opacity", "1"), !1;
    var d = function d(t, a) {
      var r = t.data("hold");
      if (r && !t.data("_holding")) return t.data("_holding", !0), setTimeout(function () {
        d(t, !0);
      }, r), !1;
      if (t.data("_holding") && !a) return !1;
      var i = t.data("_spinner");
      i && i.css("opacity", 0), t.css("transition", "opacity " + e + "ms ease-out"), t.css("opacity", "1");
      var o = t.data("style-2");
      o && t.attr("style", t.attr("style") + "; " + o), t.data("_fired", !0), c();
    },
        c = function c(t) {
      t && a.push(t);
      for (var e in a) {
        var r = a[e];
        if (r.data("_fired")) ;else {
          var i,
              o = !1;
          if (i = r.data("_waitFor")) {
            for (;;) {
              if (!i.data("_fired")) {
                if (i[0] == r[0]) {
                  o = !0;
                  break;
                }
                if (i = i.data("_waitFor")) continue;
              }
              break;
            }(r.data("_waitFor").data("_fired") || o) && d(r);
          } else d(r);
        }
      }
    };
    t(".emerge").each(function () {
      var a = t(this),
          n = {},
          d = !1,
          l = 12,
          f = 1333,
          u = "#404040",
          p = 0,
          g = e,
          m = 0,
          v = 0,
          w = "",
          y = "",
          b = e,
          h = {};
      a.$prev = r;
      var k = function k() {
        a.data("continue") && a.data("_waitFor", a.$prev), a.data("await") && a.data("_waitFor", t("#" + a.data("await"))), c(a);
      },
          _ = function _() {
        v++, v == m && setTimeout(k, a.data("slow"));
      };
      if (a.data("opaque") && a.css("opacity", 1), h = a.data("effect") || !1, b = a.data("duration") || e, h) {
        var x = {},
            z = ["", "-webkit-"],
            I = "transform",
            F = "transform-origin",
            j = a.data("up") || 0,
            S = a.data("down") || 0,
            B = a.data("left") || 0,
            C = a.data("right") || 0,
            M = a.data("angle") || "90",
            O = a.data("scale") || -1,
            Q = a.data("origin") || "50% 50%";
        if (S && (j = "-" + S, "--" == j.substr(0, 2) && (j = j.substr(2))), C && (B = "-" + C, "--" == B.substr(0, 2) && (B = B.substr(2))), "relax" == h && (-1 == O && (O = .92), "50% 50%" == Q && (Q = "top"), x = {
          one: "scaleY(" + O + ")",
          two: "scaleY(1)",
          orn: Q,
          crv: "cubic-bezier(0, 0, 0.001, 1)"
        }), "slide" == h && (j || (j = "20px"), x = {
          one: "translate(" + B + "," + j + ")",
          two: "translate(0,0)",
          crv: "cubic-bezier(0, 0.9, 0.1, 1)"
        }), "zoom" == h && (-1 == O && (O = .5), x = {
          one: "scale(" + O + ")",
          two: "scale(1)",
          orn: Q,
          crv: "cubic-bezier(0, 0.75, 0.25, 1)"
        }), "screw" == h && (-1 == O && (O = .5), M || (M = 90), x = {
          one: "scale(" + O + ") rotate(" + M + "deg)",
          two: "scale(1) rotate(0)",
          orn: Q,
          crv: "cubic-bezier(0, 0.75, 0.25, 1)"
        }), x) for (var T = 0; T < z.length; ++T) {
          w += z[T] + I + ": " + x.one + "; " + z[T] + F + ": " + x.orn + "; ", y += z[T] + I + ": " + x.two + "; " + z[T] + "transition: opacity " + b + "ms ease-out, " + z[T] + I + " " + b + "ms " + x.crv + "; ";
        }a.data("style-1", w), a.data("style-2", y);
      }
      if (w || (w = a.data("style-1")), w && a.attr("style", a.attr("style") + "; " + w), a.find("*").addBack().each(function () {
        var a = t(this);
        a.is("img:uncached") && a.attr("src") && (n[a.attr("src")] = !0);
        for (var e = 0; e < i.length; ++e) {
          var r,
              s = i[e],
              d = a.css(s),
              c = -1;
          if (d && (c = d.indexOf("url(")) >= 0) for (; null !== (r = o.exec(d));) {
            n[r[2]] = !0;
          }
        }
      }), Object.keys(n).length > 0 && (d = a.data("spin"))) {
        var Y = a.data("spin-element");
        if (Y) var $ = t("#" + Y).clone().css({
          position: "absolute",
          display: "block"
        });else {
          a.data("spin-size") && (l = a.data("spin-size") / 2), a.data("spin-color") && (u = a.data("spin-color")), a.data("spin-period") && (f = a.data("spin-period")), a.data("spin-direction") && (p = "clockwise" == a.data("spin-direction") ? 0 : 1), g = b;
          var $ = t(s(l, u, p, f, g));
        }
        $.css({
          width: "100%",
          height: Math.min(a.height(), document.body.clientHeight - a.offset().top)
        }), a.before($), a.data("_spinner", $);
      }
      for (var T in n) {
        var q = new Image();
        q.src = T, m++, q.width > 0 ? _() : t(q).on("load error", _);
      }
      m++, _(), r = a;
    });
  });
}(jQuery), document.write("<style>.emerge { opacity: 0; }</style>"));
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

function px2px() {

  'use strict';

  var doc = document;
  var panelClass = 'p_panel';

  var controlsPanel = void 0;
  var controlsPanelHeader = void 0;
  var controlsPanelBody = void 0;

  var marginLeftInput = void 0;

  var onOffWrap = void 0;
  var onOff = void 0;
  var onOffLabel = void 0;
  var onOffFormControl = void 0;

  var prefix = 'pg';

  var px2pxBlock = doc.getElementsByClassName('px2px')[0];

  function init() {
    createContolsPanel();
  }

  // создаём контрольную панель
  function createContolsPanel() {
    var targetElem = doc.documentElement;

    controlsPanel = doc.createElement('div');
    controlsPanel.classList.add(panelClass);
    targetElem.appendChild(controlsPanel);

    createDragHeader();

    controlsPanelBody = doc.createElement('div');
    controlsPanelBody.classList.add('p_panel_body');
    controlsPanelBody.innerHTML = '<div class="p_form-group">\
      <label for="">Слой с макетом</label>\
    <div class="p_input-group">\
      <input type="number" class="p_form-control p_form-control--mini" placeholder="0.7" step="0.1" min="0" max="1">\
      <input type="number" class="p_form-control p_form-control--mini" placeholder="0.7">\
      <button class="p_btn" type="submit">Выкл</button>\
      </div>\
      <small id="emailHelp" class="form-text text-muted">Прозрачность и фильтр</small>\
    </div>\
    <div class="p_form-group">\
      <label for="">Отступы (margin)</label>\
      <div class="p_input-group">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      <input type="number" class="p_form-control" placeholder="0">\
      </div>\
      <small id="emailHelp" class="form-text text-muted">Значения в px</small>\
    </div>';
    controlsPanel.appendChild(controlsPanelBody);

    initControls();
  }

  // создаём шапку, за которую можно таскать всю панель
  function createDragHeader() {
    controlsPanelHeader = doc.createElement('div');
    controlsPanelHeader.classList.add('p_panel_header');
    controlsPanelHeader.innerHTML = '<div class="p_dragndrop">\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      <div class="p_dragndrop_dot"></div>\
      </div>';
    controlsPanel.appendChild(controlsPanelHeader);

    controlsPanelHeader.onmousedown = function () {
      var offsetTop = this.offsetTop;
      var offsetLeft = controlsPanel.clientWidth - this.clientWidth;
      var styles = getComputedStyle(controlsPanel);

      controlsPanel.style.top = styles.top;
      controlsPanel.style.left = styles.left;
      controlsPanel.style.right = 'auto';
      controlsPanel.style.bottom = 'auto';

      doc.onmousemove = function (ev) {
        var x = ev.clientX - 20 + 'px';
        var y = ev.clientY - 20 + 'px';

        controlsPanel.style.left = x;
        controlsPanel.style.top = y;
      };
    };

    controlsPanelHeader.onmouseup = function () {
      var styles = getComputedStyle(controlsPanel);
      var left = +styles.left.replace(/px/, '');
      var right = +styles.right.replace(/px/, '');
      var top = +styles.top.replace(/px/, '');
      var bottom = +styles.bottom.replace(/px/, '');

      if (left > right) {
        saveLocalStorage('left', 'auto');
        saveLocalStorage('right', styles.right);

        controlsPanel.style.right = styles.right;
        controlsPanel.style.left = 'auto';
      } else {
        saveLocalStorage('left', styles.left);
        saveLocalStorage('right', 'auto'); //'auto' needs to override default position;
      }
      if (top > bottom) {
        saveLocalStorage('top', 'auto');
        saveLocalStorage('bottom', styles.bottom);

        controlsPanel.style.bottom = styles.bottom;
        controlsPanel.style.top = 'auto';
      } else {
        saveLocalStorage('top', styles.top);
        saveLocalStorage('bottom', 'auto');
      }

      doc.onmousemove = null;
    };
  }

  // создаём контрольные элементы
  function initControls() {
    createOnOff();
    marginLeft();
  }

  function saveLocalStorage(name, value) {
    var itemName = [prefix, name].join('-');
    localStorage[itemName] = value;
  }

  // контрольный элемент: чекбокс вкл/выкл слоя
  function createOnOff() {

    onOffWrap = doc.createElement('div');
    onOffWrap.classList.add('form-check');
    // controlsPanelInner.appendChild(onOffWrap);

    onOff = doc.createElement('input');
    onOff.type = "checkbox";
    onOff.name = "onofctrl";
    onOff.id = "onOffControl";
    onOff.checked = true;

    onOffWrap.appendChild(onOff);

    onOffLabel = doc.createElement('label');
    onOffLabel.setAttribute("for", 'onOffControl');
    onOffWrap.appendChild(onOffLabel);

    onOffFormControl = doc.createElement('span');
    onOffFormControl.classList.add('form-check-control');
    onOffFormControl.innerHTML = "вкл/выкл";
    onOffLabel.appendChild(onOffFormControl);
  }

  function marginLeft() {
    marginLeftInput = doc.createElement('input');
    marginLeftInput.type = "text";
    marginLeftInput.name = "marginleft";
    marginLeftInput.value = "";
    marginLeftInput.id = "marginleft";
    marginLeftInput.placeholder = "marginLeftControl";

    // controlsPanelInner.appendChild(marginLeftInput);
  }

  // если есть нужный элемент на странице
  if (px2pxBlock) {

    // , то создаём контрольную панель
    init();

    document.body.className = "something";

    // и следим за положением чекбокса
    // doc.getElementById('onOffControl').onchange = function() {
    //   px2pxBlock.style.display = this.checked ? 'block' : 'none';
    // };

    // var p = document.getElementById("target");
    // var style = p.currentStyle || window.getComputedStyle(p);
    //
    // display("Current marginTop: " + style.marginTop);
  }
}

window.onload = function () {
  px2px();
};

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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
// UMD factory - https://github.com/umdjs/umd/blob/d31bb6ee7098715e019f52bdfe27b3e4bfd2b97e/templates/jqueryPlugin.js
// Uses AMD, CommonJS or browser globals to create a jQuery plugin.
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD - register as an anonymous module
    define(['jquery'], factory);
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
    var $ = require('jquery');
    factory($);
    module.exports = $;
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  /**
   * Inner implementation of the circle progress bar.
   * The class is not exposed _yet_ but you can create an instance through jQuery method call.
   *
   * @param {object} config - You can customize any class member (property or method).
   * @class
   * @alias CircleProgress
   */
  function CircleProgress(config) {
    this.init(config);
  }

  CircleProgress.prototype = {
    //--------------------------------------- public options ---------------------------------------
    /**
     * This is the only required option. It should be from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    value: 0.0,

    /**
     * Size of the canvas in pixels.
     * It's a square so we need only one dimension.
     * @type {number}
     * @default 100.0
     */
    size: 100.0,

    /**
     * Initial angle for `0.0` value in radians.
     * @type {number}
     * @default -Math.PI
     */
    startAngle: -Math.PI,

    /**
     * Width of the arc in pixels.
     * If it's `'auto'` - the value is calculated as `[this.size]{@link CircleProgress#size} / 14`.
     * @type {number|string}
     * @default 'auto'
     */
    thickness: 'auto',

    /**
     * Fill of the arc. You may set it to:
     *
     *   - solid color:
     *     - `'#3aeabb'`
     *     - `{ color: '#3aeabb' }`
     *     - `{ color: 'rgba(255, 255, 255, .3)' }`
     *   - linear gradient _(left to right)_:
     *     - `{ gradient: ['#3aeabb', '#fdd250'], gradientAngle: Math.PI / 4 }`
     *     - `{ gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1] }`
     *     - `{ gradient: [["red", .2], ["green", .3], ["blue", .8]] }`
     *   - image:
     *     - `{ image: 'http://i.imgur.com/pT0i89v.png' }`
     *     - `{ image: imageObject }`
     *     - `{ color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' }` -
     *       color displayed until the image is loaded
     *
     * @default {gradient: ['#3aeabb', '#fdd250']}
     */
    fill: {
      gradient: ['#3aeabb', '#fdd250']
    },

    /**
     * Color of the "empty" arc. Only a color fill supported by now.
     * @type {string}
     * @default 'rgba(0, 0, 0, .1)'
     */
    emptyFill: 'rgba(0, 0, 0, .1)',

    /**
     * jQuery Animation config.
     * You can pass `false` to disable the animation.
     * @see http://api.jquery.com/animate/
     * @type {object|boolean}
     * @default {duration: 1200, easing: 'circleProgressEasing'}
     */
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    },

    /**
     * Default animation starts at `0.0` and ends at specified `value`. Let's call this _direct animation_.
     * If you want to make _reversed animation_ - set `animationStartValue: 1.0`.
     * Also you may specify any other value from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    animationStartValue: 0.0,

    /**
     * Reverse animation and arc draw.
     * By default, the arc is filled from `0.0` to `value`, _clockwise_.
     * With `reverse: true` the arc is filled from `1.0` to `value`, _counter-clockwise_.
     * @type {boolean}
     * @default false
     */
    reverse: false,

    /**
     * Arc line cap: `'butt'`, `'round'` or `'square'` -
     * [read more]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.lineCap}.
     * @type {string}
     * @default 'butt'
     */
    lineCap: 'butt',

    /**
     * Canvas insertion mode: append or prepend it into the parent element?
     * @type {string}
     * @default 'prepend'
     */
    insertMode: 'prepend',

    //------------------------------ protected properties and methods ------------------------------
    /**
     * Link to {@link CircleProgress} constructor.
     * @protected
     */
    constructor: CircleProgress,

    /**
     * Container element. Should be passed into constructor config.
     * @protected
     * @type {jQuery}
     */
    el: null,

    /**
     * Canvas element. Automatically generated and prepended to [this.el]{@link CircleProgress#el}.
     * @protected
     * @type {HTMLCanvasElement}
     */
    canvas: null,

    /**
     * 2D-context of [this.canvas]{@link CircleProgress#canvas}.
     * @protected
     * @type {CanvasRenderingContext2D}
     */
    ctx: null,

    /**
     * Radius of the outer circle. Automatically calculated as `[this.size]{@link CircleProgress#size} / 2`.
     * @protected
     * @type {number}
     */
    radius: 0.0,

    /**
     * Fill of the main arc. Automatically calculated, depending on [this.fill]{@link CircleProgress#fill} option.
     * @protected
     * @type {string|CanvasGradient|CanvasPattern}
     */
    arcFill: null,

    /**
     * Last rendered frame value.
     * @protected
     * @type {number}
     */
    lastFrameValue: 0.0,

    /**
     * Init/re-init the widget.
     *
     * Throws a jQuery event:
     *
     * - `circle-inited(jqEvent)`
     *
     * @param {object} config - You can customize any class member (property or method).
     */
    init: function init(config) {
      $.extend(this, config);
      this.radius = this.size / 2;
      this.initWidget();
      this.initFill();
      this.draw();
      this.el.trigger('circle-inited');
    },

    /**
     * Initialize `<canvas>`.
     * @protected
     */
    initWidget: function initWidget() {
      if (!this.canvas) this.canvas = $('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0];

      var canvas = this.canvas;
      canvas.width = this.size;
      canvas.height = this.size;
      this.ctx = canvas.getContext('2d');

      if (window.devicePixelRatio > 1) {
        var scaleBy = window.devicePixelRatio;
        canvas.style.width = canvas.style.height = this.size + 'px';
        canvas.width = canvas.height = this.size * scaleBy;
        this.ctx.scale(scaleBy, scaleBy);
      }
    },

    /**
     * This method sets [this.arcFill]{@link CircleProgress#arcFill}.
     * It could do this async (on image load).
     * @protected
     */
    initFill: function initFill() {
      var self = this,
          fill = this.fill,
          ctx = this.ctx,
          size = this.size;

      if (!fill) throw Error("The fill is not specified!");

      if (typeof fill == 'string') fill = { color: fill };

      if (fill.color) this.arcFill = fill.color;

      if (fill.gradient) {
        var gr = fill.gradient;

        if (gr.length == 1) {
          this.arcFill = gr[0];
        } else if (gr.length > 1) {
          var ga = fill.gradientAngle || 0,
              // gradient direction angle; 0 by default
          gd = fill.gradientDirection || [size / 2 * (1 - Math.cos(ga)), // x0
          size / 2 * (1 + Math.sin(ga)), // y0
          size / 2 * (1 + Math.cos(ga)), // x1
          size / 2 * (1 - Math.sin(ga)) // y1
          ];

          var lg = ctx.createLinearGradient.apply(ctx, gd);

          for (var i = 0; i < gr.length; i++) {
            var color = gr[i],
                pos = i / (gr.length - 1);

            if ($.isArray(color)) {
              pos = color[1];
              color = color[0];
            }

            lg.addColorStop(pos, color);
          }

          this.arcFill = lg;
        }
      }

      if (fill.image) {
        var img;

        if (fill.image instanceof Image) {
          img = fill.image;
        } else {
          img = new Image();
          img.src = fill.image;
        }

        if (img.complete) setImageFill();else img.onload = setImageFill;
      }

      function setImageFill() {
        var bg = $('<canvas>')[0];
        bg.width = self.size;
        bg.height = self.size;
        bg.getContext('2d').drawImage(img, 0, 0, size, size);
        self.arcFill = self.ctx.createPattern(bg, 'no-repeat');
        self.drawFrame(self.lastFrameValue);
      }
    },

    /**
     * Draw the circle.
     * @protected
     */
    draw: function draw() {
      if (this.animation) this.drawAnimated(this.value);else this.drawFrame(this.value);
    },

    /**
     * Draw a single animation frame.
     * @protected
     * @param {number} v - Frame value.
     */
    drawFrame: function drawFrame(v) {
      this.lastFrameValue = v;
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawEmptyArc(v);
      this.drawArc(v);
    },

    /**
     * Draw the arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawArc: function drawArc(v) {
      if (v === 0) return;

      var ctx = this.ctx,
          r = this.radius,
          t = this.getThickness(),
          a = this.startAngle;

      ctx.save();
      ctx.beginPath();

      if (!this.reverse) {
        ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
      } else {
        ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
      }

      ctx.lineWidth = t;
      ctx.lineCap = this.lineCap;
      ctx.strokeStyle = this.arcFill;
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Draw the _empty (background)_ arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawEmptyArc: function drawEmptyArc(v) {
      var ctx = this.ctx,
          r = this.radius,
          t = this.getThickness(),
          a = this.startAngle;

      if (v < 1) {
        ctx.save();
        ctx.beginPath();

        if (v <= 0) {
          ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
        } else {
          if (!this.reverse) {
            ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
          } else {
            ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
          }
        }

        ctx.lineWidth = t;
        ctx.strokeStyle = this.emptyFill;
        ctx.stroke();
        ctx.restore();
      }
    },

    /**
     * Animate the progress bar.
     *
     * Throws 3 jQuery events:
     *
     * - `circle-animation-start(jqEvent)`
     * - `circle-animation-progress(jqEvent, animationProgress, stepValue)` - multiple event
     *   animationProgress: from `0.0` to `1.0`; stepValue: from `0.0` to `value`
     * - `circle-animation-end(jqEvent)`
     *
     * @protected
     * @param {number} v - Final value.
     */
    drawAnimated: function drawAnimated(v) {
      var self = this,
          el = this.el,
          canvas = $(this.canvas);

      // stop previous animation before new "start" event is triggered
      canvas.stop(true, false);
      el.trigger('circle-animation-start');

      canvas.css({ animationProgress: 0 }).animate({ animationProgress: 1 }, $.extend({}, this.animation, {
        step: function step(animationProgress) {
          var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
          self.drawFrame(stepValue);
          el.trigger('circle-animation-progress', [animationProgress, stepValue]);
        }
      })).promise().always(function () {
        // trigger on both successful & failure animation end
        el.trigger('circle-animation-end');
      });
    },

    /**
     * Get the circle thickness.
     * @see CircleProgress#thickness
     * @protected
     * @returns {number}
     */
    getThickness: function getThickness() {
      return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },

    /**
     * Get current value.
     * @protected
     * @return {number}
     */
    getValue: function getValue() {
      return this.value;
    },

    /**
     * Set current value (with smooth animation transition).
     * @protected
     * @param {number} newValue
     */
    setValue: function setValue(newValue) {
      if (this.animation) this.animationStartValue = this.lastFrameValue;
      this.value = newValue;
      this.draw();
    }
  };

  //----------------------------------- Initiating jQuery plugin -----------------------------------
  $.circleProgress = {
    // Default options (you may override them)
    defaults: CircleProgress.prototype
  };

  // ease-in-out-cubic
  $.easing.circleProgressEasing = function (x) {
    if (x < 0.5) {
      x = 2 * x;
      return 0.5 * x * x * x;
    } else {
      x = 2 - 2 * x;
      return 1 - 0.5 * x * x * x;
    }
  };

  /**
   * Creates an instance of {@link CircleProgress}.
   * Produces [init event]{@link CircleProgress#init} and [animation events]{@link CircleProgress#drawAnimated}.
   *
   * @param {object} [configOrCommand] - Config object or command name.
   *
   * Config example (you can specify any {@link CircleProgress} property):
   *
   * ```js
   * { value: 0.75, size: 50, animation: false }
   * ```
   *
   * Commands:
   *
   * ```js
   * el.circleProgress('widget'); // get the <canvas>
   * el.circleProgress('value'); // get the value
   * el.circleProgress('value', newValue); // update the value
   * el.circleProgress('redraw'); // redraw the circle
   * el.circleProgress(); // the same as 'redraw'
   * ```
   *
   * @param {string} [commandArgument] - Some commands (like `'value'`) may require an argument.
   * @see CircleProgress
   * @alias "$(...).circleProgress"
   */
  $.fn.circleProgress = function (configOrCommand, commandArgument) {
    var dataName = 'circle-progress',
        firstInstance = this.data(dataName);

    if (configOrCommand == 'widget') {
      if (!firstInstance) throw Error('Calling "widget" method on not initialized instance is forbidden');
      return firstInstance.canvas;
    }

    if (configOrCommand == 'value') {
      if (!firstInstance) throw Error('Calling "value" method on not initialized instance is forbidden');
      if (typeof commandArgument == 'undefined') {
        return firstInstance.getValue();
      } else {
        var newValue = arguments[1];
        return this.each(function () {
          $(this).data(dataName).setValue(newValue);
        });
      }
    }

    return this.each(function () {
      var el = $(this),
          instance = el.data(dataName),
          config = $.isPlainObject(configOrCommand) ? configOrCommand : {};

      if (instance) {
        instance.init(config);
      } else {
        var initialConfig = $.extend({}, el.data());
        if (typeof initialConfig.fill == 'string') initialConfig.fill = JSON.parse(initialConfig.fill);
        if (typeof initialConfig.animation == 'string') initialConfig.animation = JSON.parse(initialConfig.animation);
        config = $.extend(initialConfig, config);
        config.el = el;
        instance = new CircleProgress(config);
        el.data(dataName, instance);
      }
    });
  };
});

$('.circle').circleProgress({
  value: .55,
  size: 24,
  startAngle: -Math.PI / 4 * 2,
  fill: "#24ab03",
  emptyFill: "#eceeef"
});

$('.panel-step .circle').circleProgress({
  value: .0,
  size: 40
});

$('.panel-step .circle.full').circleProgress({
  value: 1,
  startAngle: -Math.PI / 4 * 4.1
});

$('.panel-step .circle.quarter').circleProgress({
  value: .25
});

$('.panel-step .circle.half').circleProgress({
  value: .50,
  startAngle: -Math.PI / 4 * 4.1
});

$('.info-mini .circle').circleProgress({
  value: .0,
  size: 60,
  thickness: 2
});

$('.page-lesson .circle-15').circleProgress({
  value: .16,
  startAngle: -Math.PI / 4 * 2
});

$('.page-lesson .circle-48').circleProgress({
  value: .90,
  startAngle: -Math.PI / 4 * 2
});
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
'use strict';

(function () {

  $('#search').keyup(function () {

    if ($(this).val().length < 1) {
      $('._search-bubble').removeClass('show');
      $(this).removeClass('focus');
      $('.search__box .loading').hide();
      $('.search__box span .ico-cross').hide();
    } else {
      $(this).addClass('focus');
      $('.search__box .loading').show();
      $('._search-bubble').addClass('show');
      $('._search-results').removeClass('show');
      $('._search-bubble__text').addClass('show');
      $('._search-bubble__text h3').text('Одной буквы недостаточно для поиска');
      $('._search-bubble__text p').text('Попробуйте ввести слово целиком?');
    }

    if ($(this).val().length > 1) {
      if ($(this).val() === 'кон') {
        $('._search-results').addClass('show');
        $('._search-bubble__text').removeClass('show');
        $('.search__box .loading').hide();
        $('.search__box span .ico-cross').show();
      } else {
        $('._search-results').removeClass('show');
        $('._search-bubble__text').addClass('show');
        $('._search-bubble__text h3').text('Ничего не найдено');
        $('._search-bubble__text p').text('Проверте написание или попробуйте другой запрос');
      }
    }
  });
})();
'use strict';

var pass = $(".psdfdsf");
$('.show-password').click(function () {
  pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
});