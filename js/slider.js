const swiper1 = new Swiper ('.swiper-project', {
    loop: true,
    breakpoints: {
        768: {

            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            speed: 350,
            coverflowEffect: {
            rotate: 0,
            stretch: 220,
            depth: 120,
            modifier: 1,
            slideShadows: true,
            },

        },

        360: {
            effect: "slide",
            centeredSlides: true,
            spaceBetween: 10,
            slidesPerView: 1,

        }
    },

    navigation: {  
        nextEl: '.swiper-project__button-next',
        prevEl: '.swiper-project__button-prev'
    },

    

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 350,
    coverflowEffect: {
    rotate: 0,
    stretch: 220,
    depth: 120,
    modifier: 1,
    slideShadows: true,
    },


}); 

const swiperPopup = new Swiper ('.swiper-popup', {
    loop: true,
    
    navigation: {  
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});