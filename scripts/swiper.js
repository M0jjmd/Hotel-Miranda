const swiper = new Swiper('.arrows-swiper', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

const facilitiesSwiper = new Swiper('.simple-swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    }
})

const foodSwiper = new Swiper('.food-swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.food-swiper-buttons-next',
        prevEl: '.food-swiper-buttons-prev',
    },
})

const imageSwiper = new Swiper('.image-swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.image-swiper-pagination',
        clickable: true,
    },
})