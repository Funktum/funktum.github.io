// Open links and documents in new tab
jQuery('a[href^="http:"], a[href^="https:"]').not('[href*="funktum.fi"]').attr('target','_blank');
jQuery('a[href$=".pdf"]').attr('target','_blank');

// Add class to paragraphs containing images
$('p > img:not([class]').parent('p').attr('class', 'has-image');

// Add lightbox only on bigger screens that are not touch screens
if ($(window).width() > 600 && !Modernizr.touch) {
  $('.page-content img:not([class])').attr('class', 'image-popup');
}

// Lightbox
jQuery(document).ready(function($) {
  $('img.image-popup').click(function(e) {
    e.preventDefault();
    var image_href = $(this).attr("src");

    // If the lightbox window HTML already exists in document,
    // change the img src to to match the href of whatever link was clicked

    if ($('#lightbox').length > 0) { // #lightbox exists
      $('#content').html('<img src="' + image_href + '" />');
      $('#lightbox').fadeIn(200);
    }

  });

  //Click anywhere on the page to get rid of lightbox window
  $('#lightbox').on('click', function() {
    $('#lightbox').fadeOut(200);
  });

});