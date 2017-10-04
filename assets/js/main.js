// Open links and documents in new tab
jQuery('a[href^="http:"], a[href^="https:"]').not('[href*="funktum.fi"]').attr('target','_blank');
jQuery('a[href$=".pdf"]').attr('target','_blank');

// Add class to paragraphs containing images
$('p > img:not([class])').parent('p').attr('class', 'image-grid');

// Add lightbox only on bigger screens that are not touch screens
if ($(window).width() > 600 && !Modernizr.touch) {
  $('.image-grid img:not([class])').attr('class', 'image-popup');
}

// Lightbox
jQuery(document).ready(function($) {
  $('img.image-popup').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('no-scroll');
    var image_href = $(this).attr("src");
    if ($('#lightbox').length > 0) { // #lightbox exists
      $('#lightbox').fadeIn(100);
      $('#content').html('<img src="' + image_href + '" />').delay(100).fadeIn(100);
    }
  });

  $('#lightbox').on('click', function() {
    $('body').toggleClass('no-scroll');
    $('#content').fadeOut(100)
    $('#lightbox').delay(100).fadeOut(100);
  });
});