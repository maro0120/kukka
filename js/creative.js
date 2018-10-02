(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top )
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  sr.reveal('.sr-left', {
    origin: 'left',
    duration: 3000,
    scale: 1.0,
    distance: '50px',
    opacity: 0.5,
    reset: 'true'
  }, 300);

  sr.reveal( '.sr-right', {
    origin: 'right',
    duration: 3000,
    scale: 1.0,
    distance: '500px',
    opacity: 0.5,
    reset: 'true'
   });

  sr.reveal( '.sr-bottom', {
    origin: 'bottom',
    duration: 2000,
    scale: 1.0,
    distance: '50px',
    opacity: 0,
    delay :200,
    easing: 'cubic-bezier(.01, .52, .16, .98)'
   });

  sr.reveal( '.sr-bottom-300', {
    origin: 'bottom',
    duration: 1000,
    scale: 1.0,
    distance: '50px',
    opacity: 0,
    delay :300,
    easing: 'cubic-bezier(.01, .52, .16, .98)'
   });
  sr.reveal( '.sr-bottom-400', {
    origin: 'bottom',
    duration: 1000,
    scale: 1.0,
    distance: '50px',
    opacity: 0,
    delay :400,
    easing: 'cubic-bezier(.01, .52, .16, .98)'
   });
  sr.reveal( '.sr-bottom-500', {
    origin: 'bottom',
    duration: 1000,
    scale: 1.0,
    distance: '50px',
    opacity: 0,
    delay :500,
    easing: 'cubic-bezier(.01, .52, .16, .98)'
   });
  sr.reveal( '.sr-bottom-600', {
    origin: 'bottom',
    duration: 1000,
    scale: 1.0,
    distance: '50px',
    opacity: 0,
    delay :600,
    easing: 'cubic-bezier(.01, .52, .16, .98)'
   });

sr.reveal('.animate', { easing: 'ease', duration: 2000, distance: '400px', opacity: 1, scale: 1 ,reset: 'true'});


})(jQuery); // End of use strict
