

$("#one-faq").click(function(){
  $("#two-faq").slideToggle(500);
});

$("#one-faqf").click(function(){
  $("#two-faqf").slideToggle(500);
});

$("#one-faqs").click(function(){
  $("#two-faqs").slideToggle(500);
});



$("#bar").click(function(){
  $("#bars-ul").toggle(500);
});

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2000,
    delay: 300
});



ScrollReveal().reveal('.content',{ delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.image img',{ delay: 500, origin: 'right'});
ScrollReveal().reveal('.content-text .pra-one',{ delay: 500, origin: 'bottom',interval: 200});
ScrollReveal().reveal('.content-text .pra-two',{ delay: 500, origin: 'bottom',interval: 200});
ScrollReveal().reveal('.content-text h1',{ delay: 400, origin: 'bottom',interval: 200});
ScrollReveal().reveal('.content-text button',{ delay: 600, origin: 'bottom',interval: 200});
ScrollReveal().reveal('.main-text-css',{ delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.our-features .content .card ',{ delay: 600, origin: 'bottom',interval: 200});
ScrollReveal().reveal('.about img',{ delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.about .content-about .text-abut',{ delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.content-serv .box ',{ delay: 600, origin: 'bottom',interval: 200});



// swiper Js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




let nums = document.querySelectorAll(".nums .num");
let eee = document.getElementById("state");
let started = false;


window.onscroll = function () {
  if (window.scrollY >= eee.offsetTop) {
    if(!started){
      nums.forEach((num) => startCount(num));
    }
  }
  started= true;
}



function startCount(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(count);
    }
  }, 20 / goal );
}