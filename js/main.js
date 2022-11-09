$(function () {
  $(".menu a, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__list").toggleClass("active");
    $(this).toggleClass("active");
  });


  var mixer = mixitup(".portfolio__content");

});

/* Fixed menu*/
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    menu.classList.add('menu-fixed')
  }
  else {
    menu.classList.remove('menu-fixed')
  }
})