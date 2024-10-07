let lastScrollTop = 0
const header = document.getElementById('header')
const menuButton = document.getElementById('header__menu')
const linksList = document.getElementById('header__links')

menuButton.addEventListener('click', function () {
    if (linksList.style.display === 'none' || linksList.style.display === '') {
        linksList.style.display = 'block'
    } else {
        linksList.style.display = 'none'
    }
})

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden')
    }

    lastScrollTop = scrollTop
})

document.addEventListener('mousemove', (e) => {
    if (e.clientY <= 0) {
        header.classList.remove('hidden')
    }
})

window.addEventListener('scroll', () => {
    if (lastScrollTop === 0) {
        header.classList.remove('hidden')
    }
})