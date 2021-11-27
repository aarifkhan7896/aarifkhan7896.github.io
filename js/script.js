// Toggle Navbar
$(document).ready(function(){
  $(".fa-bars").click(function(){
    $("#navbar").slideToggle();
  })

// scroll effect on header
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>300){
      $("nav").css({"background-color":"#0a192f","padding":"5px 20px","transition":"0.5s"});
    }else{
      $("nav").css({"background-color":"#1a1a1a","padding":"15px 20px","transition":"0.5s"});
    }
  })

// toggle projects
  $("#btnMore").click(function(){
    $("#showMore").slideToggle();
    $("#btnMore").html('<i class="fas fa-angle-up fa-2x"></i>');
  })

// owl-carousel
  $(".owl-carousel").owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1200:{
        items:1
      }
    }
  })

})

// scroll top
function topHead() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}