$("header").find("a").mouseout(function() {
  $(this).css("transition", "0.5s");
})

$(".contact-links > a").hover(function() {
  $(this).find("i").css("transform", "scale(1.25)");
}, function() {
  $(this).css("transition", "0.5s");
  $(this).css("transform", "scale(1)");
  $(this).find("i").css("transform", "scale(1)");
  $(this).find("i").css("transition", "0.5s");
});
