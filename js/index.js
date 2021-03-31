$(document).ready(function() {
  let section = document.querySelector('.icons');
  let stop = false;

  // Set animation to begin on scroll event
  window.addEventListener('scroll', (e) => {
     // Set the height
     let animation = (window.scrollY + window.innerHeight) >= section.offsetTop;
     //If animation hasn't been activated start functions
     if (animation && (stop === false)) {
        stop = true;
        $('.value').each(function () {
           //Setting counter from 0, trigger animation
           $(this).prop('Counter', 0).animate({
              // What is being animated
              Counter: $(this).text()
           }, {
              // How long and how is being animated and how
              duration: 3000,
              easing: 'swing',
              step: function(now) {
                 $(this).text(Math.ceil(now));
            }
           });
        })
     }
  })
});