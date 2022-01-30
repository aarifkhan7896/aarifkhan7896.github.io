const bar = document.getElementById('bar');
const sidebar = document.getElementById('nav');
const closeBar = document.getElementById('closeBar');
const links = document.querySelectorAll('#link');
const dark = document.getElementById('dark');
const slideTop = document.getElementById('#top');

bar.onclick = function(){
  sidebar.style.width="250px"
}
closeBar.onclick = function(){
  sidebar.style.width="0";
}

links.forEach((link,index)=>{
  link.addEventListener('click',()=>{
    links.forEach((link)=>{
      link.style.backgroundColor="#242424";
      link.style.color="gray";
    })
    link.style.backgroundColor="#333";
    link.style.color="#fff";
    sidebar.style.width="0";
  })
})

dark.onclick=function(){
  document.body.classList.toggle('toggle');
}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 700) {
      $(".top").css("display", "block");
    } else {
      $(".top").css("display", "none");
    }
  });
});

slideTop.onclick = function(){
  document.body.slideTop=0;
}
AOS.init({
  duration: 1000,
});