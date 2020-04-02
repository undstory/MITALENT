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

let galleryImg = document.querySelectorAll(".gallery__img"); 
let galleryInfo = document.querySelectorAll(".gallery__info");
let galleryBtn = document.querySelectorAll(".gallery__btn");

galleryImg.forEach(function(img){

    img.addEventListener("mouseover", function(){
        
        img.classList.add('gallery__img--active');
        
        let filtr = this.getAttribute('data-filter');
        console.log(filtr);

        galleryInfo.forEach(function(element){

            element.classList.remove('gallery__info--active');

            if(element.getAttribute('data-filter') === filtr){
                element.classList.add('gallery__info--active');
            } 
            
        })

        galleryBtn.forEach(function(element){

            element.classList.remove('gallery__btn--active');

            if(element.getAttribute('data-filter') === filtr){
                element.classList.add('gallery__btn--active');
            } 
            
        })

    })

    img.addEventListener("mouseout", function(){
        img.classList.remove('gallery__img--active');

        galleryInfo.forEach(function(element){

            element.classList.remove('gallery__info--active');
            
        })

        galleryBtn.forEach(function(element){

            element.classList.remove('gallery__btn--active');
            
        })

    })

})

