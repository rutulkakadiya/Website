$(document).ready(function(){
    $(".img2").click(function(){
        $(".search").css("display","block")
    })

    $("#icon1").click(function(){
        $(".search").css("display","none")
    })
})

var swiper = new Swiper(".mySwiper1", {
    autoplay: true,
    autoplayspeed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });