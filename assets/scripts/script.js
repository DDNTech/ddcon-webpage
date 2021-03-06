$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $("#scroll-to-top").removeClass("hidden");
    $(".brand img").addClass("hidden");
  } else {
    $(".brand img").removeClass("hidden");
    $("#scroll-to-top").addClass("hidden");
  }
});

$(document).ready(function() {
  $(".team-item").mouseenter(function() {
    $(this).find('.overlay').fadeIn(300).css("display","flex");
  });

  $(".team-item").mouseleave(function() {
    $(this).find('.overlay').fadeOut(300)
  })

})

$(document).on('click', 'a', function(event){
    if ($.attr(this, 'href')[0] == '#') {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    }
});