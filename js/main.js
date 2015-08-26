// Open links and documents in new tab
jQuery('a[href^="http:"], a[href^="https:"]').not('[href*="funktum.fi"]').attr('target','_blank');
jQuery('a[href$=".pdf"]').attr('target','_blank');
