$(window).scroll(function () {
    $('.h1').toggleClass('background', $(this).scrollTop() > 1800);
});

$(window).scroll(function () {
    $('.img1').toggleClass('background1', $(this).scrollTop() > 50);
});

$(window).scroll(function () {
    $('.main3').toggleClass('background2', $(this).scrollTop() > 3300);
});
$(window).scroll(function () {
    $('.main4').toggleClass('background3', $(this).scrollTop() > 3900);
});
$(window).scroll(function () {
    $('.main5').toggleClass('background4', $(this).scrollTop() > 4500);
});


$(window).scroll(function () {
    $('.main6').toggleClass('background5', $(this).scrollTop() > 5700);
});

$(window).scroll(function () {
    $('.main7').toggleClass('background6', $(this).scrollTop() > 6300);
});

$(window).scroll(function () {
    $('.main8').toggleClass('background7', $(this).scrollTop() > 6900);
});

$(window).scroll(function () {
    $('.main9').toggleClass('background8', $(this).scrollTop() > 7500);
});

$(window).scroll(function () {
    $('.main10').toggleClass('background9', $(this).scrollTop() > 8100);
});

$(window).scroll(function () {
    $('.main11').toggleClass('background10', $(this).scrollTop() > 8900);
});

$(window).scroll(function () {
    $('.main12').toggleClass('background11', $(this).scrollTop() > 9500);
});

var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,

});
