
      AOS.init({
        duration: 1000,
      });

      $(document).ready(function () {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll > 300) {
            $(".nav").css("background", "#43809f ");
            $("#topArrow").css("display", "block");
          } else {
            $(".nav").css("background", "#39a7a7");
            $("#topArrow").css("display", "none");
          }
        });
      });

      document.onreadystatechange = function () {
        if (document.readyState !== "complete") {
          document.querySelector("body").style.visibility = "hidden";
          document.querySelector(".loader").style.visibility = "visible";
        } else {
          document.querySelector(".loader").style.display = "none";
          document.querySelector("body").style.visibility = "visible";
        }
      };
      var sidenav = document.getElementById("navbar-links");
      function openNav() {
        sidenav.style.width = "200px";
      }
      function closeNav() {
        sidenav.style.width = "0";
      }
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      var icon = document.getElementById("dark");
      function darkMode() {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
          icon.src = "img/light.png";
        }else{
          icon.src = "img/dark.png";
        }
      }

      function imgFunction(smallImg){
        let img = document.getElementById("bigImg");
        img.src = smallImg.src;
      }