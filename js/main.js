$(document).click(function () {
  $(".dropdown-list").fadeOut();
  $(".g-input--material input").each(function () {
    if ($(this).val() === "") {
      $(this).removeClass("focus");
      $(this).siblings(".main-input").removeClass("focus");
      $(this).next(".placeholder").removeClass("focus");
    }
  });
});

/*MATERIAL INPUT*/
$(".g-input--material").on("click", function (e) {
  $(this).find(".placeholder, input, .main-input").addClass("focus");
  e.stopPropagation();
});