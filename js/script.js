const bar = document.getElementById('bar');
const sidebar = document.getElementById('nav');
const closeBar = document.getElementById('closeBar');
const links = document.querySelectorAll('#link');
const dark = document.getElementById('dark');
const slideTop = document.getElementById('#top');
const allProjects = document.querySelector('#projects');
const projectLink = document.querySelectorAll(".projectLink");

projectLink.forEach((element)=>{
  element.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter;
    const projectCard = document.querySelectorAll(".projectCard");
    projectCard.forEach((element)=>{
      if(filter=="all"){
        element.style.display="block"
      }else{
        if(element.classList.contains(filter)){
          element.style.display="block";
        }else{
          element.style.display="none";
        }
      }
    })
  })
})

const projects = [{
  addClass:"php",
  title:"Online Discussion Forum",
  img:"./img/od1.png",
  githubLink: "https://github.com/aarifkhan7896",
  desc: `It was 
  developed using PHP in which registered 
  users can ask questions or post answers to 
  existing questions and also live chat with 
  the team of experts to clear doubts`
},{
  addClass:"javascript",
  title:"Todo App",
  img:"./img/Todo.png",
  githubLink: "https://aarifkhan7896.github.io/todo.github.io/",
  desc: `TODO List is the list that we generally
   use to maintain our day-to-day. 
  It is helpful in planning our daily schedules.
   We can add tasks at any time and delete a task that is completed. `
},{
  addClass:"ui",
  title:"eShop",
  img:"./img/eShop.png",
  githubLink: "https://aarifkhan7896.github.io/ecommerce.github.io/",
  desc: `Electronic Commerce or E-commerce is a platform for buying or selling products over the Internet.`
},{
  addClass:"php",
  title:"Library Management System",
  img:"./img/sl1.png",
  githubLink: "https://github.com/aarifkhan7896",
  desc: `A library 
  management system is designed & 
  developed to manage all the in-house 
  functions of a library.`
},{
  addClass:"javascript",
  title:"Calculator",
  img:"./img/Calc.png",
  githubLink: "https://github.com/aarifkhan7896",
  desc: `A simple calculator with HTML, CSS and JavaScript
  to perform basic math operations.`
},{
  addClass:"ui",
  title:"Starbucks",
  img:"./img/Starbucks.png",
  githubLink: "https://github.com/aarifkhan7896",
  desc: `A simple Starbucks Landing page built using HTML, CSS, and JavaScript.`
},,{
  addClass:"ui",
  title:"Times of India",
  img:"./img/toi.png",
  githubLink: "https://github.com/aarifkhan7896",
  desc: `A simple Times of India clone built using HTML, CSS, and JavaScript.`
}];

let data="";
projects.forEach((element)=>{
  const content = `<div class="projectCard ${element.addClass}">
                    <div class="imgDiv">
                      <img src="${element.img}" alt="" class="img-fluid">
                    </div>
                    <div class="description">
                      <h2 class="text-center">${element.title}</h2>
                      <p>${element.desc}</p>
                        <a href="${element.githubLink}" class="btn btn-secondary fs-5 px-5">view</a>
                    </div>
                  </div>`;
  data+=content;
  allProjects.innerHTML=data;
})

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