$(window).scroll(function () {
    $('.main2').toggleClass('background', $(this).scrollTop() > 300);
});

$(window).scroll(function () {
    $('#txt3').toggleClass('background1', $(this).scrollTop() > 1600);
});

var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});