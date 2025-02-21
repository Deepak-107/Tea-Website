const MenuOpenButton = document.getElementById("menu-open-button");
const MenuCloseButton = document.getElementById("menu-close-button");
const navLinks = document.querySelectorAll(".Nav-links");

window.addEventListener("scroll", () => {
  const header = document.querySelector(".Header");

  if (window.scrollY > (window.innerHeight * 1) - 100 ) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});


 MenuOpenButton.addEventListener("click", ()=>{
       document.body.classList.toggle("show-mobile-menu")
 })

 MenuCloseButton.addEventListener("click", ()=> { 
  return  MenuOpenButton.click();
 })
 
 navLinks.forEach(link => {
     link.addEventListener("click" , ()=>{
    return MenuOpenButton.click()
   })
 })

  const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
        slidesPerView: 1
    },   
    768:{
        slidesPerView: 2
    }, 
    1024:{
        slidesPerView: 3
    }    
  }
    });