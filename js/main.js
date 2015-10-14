// Open links and documents in new tab
jQuery('a[href^="http:"], a[href^="https:"]').not('[href*="funktum.fi"]').attr('target','_blank');
jQuery('a[href$=".pdf"]').attr('target','_blank');

$('.page-content img:not([class])').attr('class', 'image-popup');

jQuery(document).ready(function($) {

  $('img.image-popup').click(function(e) {

    //prevent default action (hyperlink)
    e.preventDefault();

    //Get clicked link href
    var image_href = $(this).attr("src");

    /*
    If the lightbox window HTML already exists in document,
    change the img src to to match the href of whatever link was clicked
    */

    if ($('#lightbox').length > 0) { // #lightbox exists

      //place href as img src value
      $('#content').html('<img src="' + image_href + '" />');

      //show lightbox window - you could use .show('fast') for a transition
      $('#lightbox').fadeIn(200);
    }

  });

  //Click anywhere on the page to get rid of lightbox window
  $('#lightbox').on('click', function() {
    $('#lightbox').fadeOut(100);
  });

});