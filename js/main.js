$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("active");
    $(this).toggleClass("active");
  });

  var mixer = mixitup(".portfolio__content");
});
