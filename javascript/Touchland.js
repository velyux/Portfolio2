$(document).ready(function(){
//     var imgs = 1;
//     var now = 0;

//    start ();

//    function start (){
//        $(".imgslide>a").eq(0).siblings().animate({"width":"-450px"});
//        setInterval(function(){
//            now=now==imgs?0:now+=1;
//            $(".imgslide>a").eq(now-1).animate({"width":"-450px"});
//            $(".imgslide>a").eq(now).animate({"width":"450px"});
//        },3000);
//    }


$('.imgslide>a:gt(0)').hide();
setInterval(function(){
    $('.imgslide>a:first-child').fadeOut().next('a')
    .fadeIn().end().appendTo('.imgslide');
},3000);

$(".top .menu").click(function(){
    $(".sub").slideToggle('on');
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  var swiper = new Swiper(".updown", {
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    }, autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  window.addEventListener('load', function (event) {
    AOS.init();
  });

  var spot1 = $("header").offset().top;
  $("#up").click(function () {
    $("html, body").animate({
      scrollTop: spot1
    }, 500);
  });

});