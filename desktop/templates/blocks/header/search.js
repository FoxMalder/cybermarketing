(function(){

  $('#search').keyup(function() {

    if($(this).val().length < 1 ) {
      $('.search-bubble').removeClass('show');
    } else {
      $('.search-bubble').addClass('show');
      $('.search-bubble__row').hide();
      $('.search-bubble__text').addClass('show');
    }

    if($(this).val().length > 1 ) {
      if ($(this).val() === 'кон') {
        $('.search-bubble__row').show();
        $('.search-bubble__text').removeClass('show');
      } else {
        $('.search-bubble__row').hide();
        $('.search-bubble__text').addClass('show');
        $('.search-bubble__text h3').text('Ничего не найдено');
        $('.search-bubble__text p').text('Проверте написание или попробуйте другой запрос ');
      }
    }

  });

})();
