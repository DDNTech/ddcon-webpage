$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $("#scroll-to-top").removeClass("hidden");
    $(".brand img").addClass("hidden");
  } else {
    $(".brand img").removeClass("hidden");
    $("#scroll-to-top").addClass("hidden");
  }
})