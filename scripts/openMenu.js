const menuButton = document.getElementById('header__menu')
const linksList = document.getElementById('header__links')

menuButton.addEventListener('click', function () {
    if (linksList.style.display === 'none' || linksList.style.display === '') {
        linksList.style.display = 'block'
    } else {
        linksList.style.display = 'none'
    }
})