// hamburger

const $menu = document.querySelector('.menuNav')
const $btnMenuOpen = document.querySelector('#menuHamburgerOpen')
const $btnMenuClose = document.querySelector('#menuHamburgerClosed')

$btnMenuOpen.addEventListener('click', function () {
  $menu.classList.add('abreMenuNav')
  document.getElementById('menuHamburgerClosed').style.display = "flex"
  document.getElementById('menuHamburgerOpen').style.display = "none"

})
$btnMenuClose.addEventListener('click', function () {
  $menu.classList.remove('abreMenuNav')
  document.getElementById('menuHamburgerClosed').style.display = "none"
  document.getElementById('menuHamburgerOpen').style.display = "flex"
})