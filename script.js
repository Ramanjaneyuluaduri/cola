const navLinks=document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.getElementById("menu-open-button");
const menuCloseButton =document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click",() => menuOpenButton.click
());

navLinks.forEach(link => {
    link.addEventListener("click",() => menuOpenButton.click());
});

//Initializing swipper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
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

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
  // Animate brands on scroll
const brandCards = document.querySelectorAll('.brand-card');

const brandObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.3
});

brandCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    brandObserver.observe(card);
});