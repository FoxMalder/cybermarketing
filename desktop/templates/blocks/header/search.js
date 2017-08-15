(function(){

  $('#search').keyup(function() {

    if($(this).val().length < 1 ) {
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

    if($(this).val().length > 1 ) {
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
