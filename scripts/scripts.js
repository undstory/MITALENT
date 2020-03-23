// nav aside 

const navHamburger = document.querySelector(".nav__hamburger");
const navAside = document.querySelector(".nav__aside"); 
const closeBtn = document.querySelector(".close-btn");
let navItem = document.querySelectorAll(".nav__item--mob");

navHamburger.addEventListener("click", function(){
    navAside.classList.add('animateMe');
}, false)

closeBtn.addEventListener("click", function(){
    navAside.classList.remove('animateMe');
   
}, false)

navItem.forEach(function(e){
    e.addEventListener("click", function(){
        navAside.classList.remove('animateMe'); 
    }, false)
})

//---