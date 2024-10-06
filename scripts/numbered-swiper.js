document.addEventListener('DOMContentLoaded', () => {
    const totalElements = 100
    const elementsPerPage = 10
    const totalSlides = totalElements / elementsPerPage
    const wrapper = document.querySelector('.swiper-wrapper')

    for (let i = 0; i < totalSlides; i++) {
        const pageSlide = document.createElement('div')
        pageSlide.classList.add('swiper-slide')

        for (let j = 1; j <= elementsPerPage; j++) {
            const elementIndex = i * elementsPerPage + j

            const elementDiv = document.createElement('div')
            elementDiv.classList.add('swiper-item')
            elementDiv.innerHTML = `
                <img src="../img/minDuplexRoom.avif" alt="luxuryRoom-${elementIndex}" class="swiper-img" />
                <div class="swiper-description">
                    <div class="swiper-img_container">
                        <div class="swiper-description__img">
                            <img src="../img/swiperImageDesc.png" alt="Room-description" />
                        </div>
                    </div>
                    <div class="swiper-description__desc">
                        <div class="swiper-description-container">
                            <h2 class="swiper-description__desc__title">Minimal Duplex Room</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="swiper-description__desc__book-now">
                            <h2 class="swiper-description__desc__book-now__price">$345/Night</h2>
                            <hr class="swiper-description__desc__book-now__custom-line">
                            <h2 class="swiper-description__desc__book-now__now">Booking Now</h2>
                        </div>
                    </div>
                </div>
            `

            pageSlide.appendChild(elementDiv)
        }

        wrapper.appendChild(pageSlide)
    }

    const swiper = new Swiper('.numbered-swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`
            },
        },
        on: {
            init: function () {
                updatePagination(this)
            },
            slideChange: function () {
                updatePagination(this)
            },
        },
    })

    function updatePagination(swiper) {
        const bullets = document.querySelectorAll('.swiper-pagination span')
        const totalBullets = bullets.length
        const activeIndex = swiper.activeIndex
        const visibleCount = 5

        let start = Math.max(activeIndex - Math.floor(visibleCount / 2), 0)
        let end = start + visibleCount

        if (end > totalBullets) {
            end = totalBullets
            start = Math.max(end - visibleCount, 0)
        }

        if (start < 0) {
            start = 0
        }

        bullets.forEach((bullet, index) => {
            bullet.style.display = (index >= start && index < end) ? 'inline-block' : 'none'
        })
    }

    const goStartButton = document.querySelector('.btn-go-start')
    const goEndButton = document.querySelector('.btn-go-end')

    if (goStartButton && goEndButton) {
        goStartButton.addEventListener('click', () => {
            swiper.slideTo(0)
            console.log("Navegar a la primera diapositiva")
        })

        goEndButton.addEventListener('click', () => {
            swiper.slideTo(totalSlides - 1)
            console.log("Navegar a la última diapositiva")
        })
    } else {
        console.error('Botones no encontrados en el DOM')
    }
})