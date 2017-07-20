// Сворачиваем и разворачиваем список уроков


(function(){

  $('._more-link').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("more-link--expand");
    $(this).parents('.course-module').find('._course-module__items').toggleClass("folded").toggleClass("unfolded");

    let close = $(this).attr("data-text-close");
    let  open = $(this).attr("data-text-open");


    if($(this).parents('.course-module').find('._course-module__items').hasClass('folded')) {
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

  $('.course-module').each(function() {
    let $e = $(this);
    if ($e.find('._course-module__items').hasClass('folded')) {
      $e.find('._more-link')
        .toggleClass("more-link--expand")
        .html('Свернуть уроки');
    }
  })

})();


(function(){

  $('.comment').each(function() {
    let $e = $(this);
    $e.find('._comment__answer').hide();
  })


  $('._more-comment').click(function(e) {
    e.preventDefault();
    $(this).toggleClass("more-link--expand");
    $(this).parents('.comment').find('._comment__answer').toggleClass("folded").toggleClass("unfolded").slideToggle();

    let close = $(this).attr("data-text-close");
    let  open = $(this).attr("data-text-open");


    if($(this).parents('.comment').find('._comment__answer').hasClass('folded')) {
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


