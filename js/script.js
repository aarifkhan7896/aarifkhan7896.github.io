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
})

// scroll top
function topHead() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}