$(function () {
  $(".menu a, .logo, .header__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("active");
    $(".body").toggleClass("lock");
    $(this).toggleClass("active");
  });

  $(".menu a").on("click", function () {
    $(".menu__list").removeClass("active");
    $(".body").removeClass("lock");
    $(this).removeClass("active");
  });


  var mixer = mixitup(".portfolio__content");

});

/* Fixed menu*/
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    menu.classList.add('fixed')
  }
  else {
    menu.classList.remove('fixed')
  }
})