import '../scss/style.scss'

const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')
const burgerIcon = document.querySelector('.js-burger-icon')
const isTablet = () => window.matchMedia('(max-width: 1119px)').matches

const closeMenu = () => {
  menu.classList.remove('menu--open')
  overlay.classList.remove('overlay--active')
  burgerIcon.src = './img/line.svg'
}

const openMenu = () => {
  menu.classList.add('menu--open')
  overlay.classList.add('overlay--active')
  burgerIcon.src = './img/burger.svg'
}

document.querySelectorAll('.js-menu-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!isTablet()) return
    menu.classList.contains('menu--open') ? closeMenu() : openMenu()
  })
})

overlay.addEventListener('click', () => {
  if (!isTablet()) return
  closeMenu()
})

window.addEventListener('resize', () => {
  if (!isTablet()) closeMenu()
})

const devicesShowAll = document.querySelector('.devices__show-all')
const devicesGrid = document.querySelector('.devices__grid')
const devicesShowAllText = devicesShowAll.querySelector('span')

devicesShowAll.addEventListener('click', () => {
  devicesGrid.classList.toggle('open')
  devicesShowAll.classList.toggle('active')
  devicesShowAllText.textContent = devicesGrid.classList.contains('open')
    ? 'Скрыть'
    : 'Показать все'
})

const button = document.querySelector('.show-more')
const buttonText = document.querySelector('.show-more-text')
const grid = document.querySelector('.brands-grid')

button.addEventListener('click', () => {
  grid.classList.toggle('open')
  button.classList.toggle('active')

  if (grid.classList.contains('open')) {
    buttonText.textContent = 'Скрыть'
  } else {
    buttonText.textContent = 'Показать все'
  }
})

new Swiper('.brands-slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

new Swiper('.devices-slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

new Swiper('.prices-slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
