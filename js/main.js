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

var number = 0;
$("#minus").click(function(){
  number -= 1;
  if (number <= 0) number = 0;
  setNumber(number);
  $("#number").addClass('bounce');
  removeAnimation();
});

$("#plus").click(function(){
  console.log(number)
  number += 1;
  setNumber(number);
  $("#number").addClass('bounce')
  removeAnimation();
});

function removeAnimation() {
  setTimeout(function(){
    $("#number").removeClass('bounce'); 
  }, 100);
}

function setNumber(number) {
  // $("#number").attr('data-content', number);
  $("#number").text(number);
}