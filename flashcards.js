$(document).ready(function() {
  function flashcardify() {
    $('#inside-content').prepend(
      '<div id="flashcard-modal">' +
        '<div id="current-question"></div>' +
        '<div id="current-answer"></div>' +
        '<ul>' +
          '<li><a id="show-answer">Show Answer</a></li>' +
          '<li><a id="correct">I was right</a></li>' +
          '<li><a id="wrong">I was wrong</a></li>' +
        '</ul>' +
      '</div>'
    );

    $('ul#dir').addClass('flashcard-list');
    $('li.entry').each(function() {
      var info = $(this).find('dl.basics');
      var photo = $(this).find('span.empPhoto');
      var photo_url = photo.find('img').attr('src');

      if (!photo_url || photo_url.endsWith('photo_male.png') || photo_url.endsWith('photo_female.png')) {
        // skip
      } else {
        $(this).addClass('flashcard');
        photo.addClass('question');
        info.addClass('answer');
      }
    });

    $('#inside-content').ouicards();
  }

  $('#content').prepend(
    $('<a id="flashcardify">Make this page into flashcards!</a>')
      .click(function(event) {
        event.preventDefault();
        $('#flashcardify').hide();
        flashcardify();
      })
  );
});
