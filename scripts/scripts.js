const navHamburger = document.querySelector(".nav__hamburger");
const navMobile = document.querySelector(".nav__mobile"); 
const closeBtn = document.querySelector(".close-btn");

navHamburger.addEventListener("click", function(){
    navMobile.classList.add('animateMe');
}, false)

closeBtn.addEventListener("click", function(){
    navMobile.classList.remove('animateMe');
}, false)
