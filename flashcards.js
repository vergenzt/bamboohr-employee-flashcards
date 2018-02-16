$(document).ready(function() {
  function flashcardify() {
    $('#root').prepend(
      '<div class="flashcard-modal">' +
        '<div id="current-question"></div>' +
        '<div id="current-answer"></div>' +
        '<ul>' +
          '<li><a id="show-answer">Show Answer</a></li>' +
          '<li><a id="correct">I was right</a></li>' +
          '<li><a id="wrong">I was wrong</a></li>' +
        '</ul>' +
        '<div class="flashcard-list"></div>' +
      '</div>'
    );

    $('.EmployeeCardContainer').each(function() {
      var info = $(this).find('.JobInfo');
      var photo = $(this).find('.ImgContainer');
      var photo_url = photo.find('img').attr('src');

      if (photo_url && !photo_url.endsWith('photo_male.png') && !photo_url.endsWith('photo_female.png')) {
        $('<div class="flashcard"></div>')
          .append(photo.clone().addClass('question'))
          .append(info.clone().addClass('answer'))
          .appendTo('.flashcard-list');
      }
    });

    $('.flashcard-modal').ouicards();
  }

  $('#root').prepend(
    $('<a id="flashcardify">Make this page into flashcards!</a>')
      .click(function(event) {
        event.preventDefault();
        $('#flashcardify').hide();
        flashcardify();
      })
  );
});
