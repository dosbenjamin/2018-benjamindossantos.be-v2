'use strict'

const button = document.querySelector('.button__clickArea')
const overlay = document.querySelector('.section--overlay')
const links = document.querySelectorAll('.workMenu__item .link')
const networkMenu = document.querySelector('.networkMenu')
const titles = document.querySelectorAll('.titleAlt__item')
let menuOpen = false

titles.forEach(title => {
  setTimeout(() => {
    title.classList.add('titleAlt__item--loading')
    title.classList.add('titleAlt__item--loadingLeft')
  }, 200)
  setTimeout(() => {
    title.classList.remove('titleAlt__item--loadingLeft')
    title.classList.add('titleAlt__item--loadingRight')
  }, 1000)
  title.addEventListener('animationend', () => {
    title.classList.add('titleAlt__item--show')
    title.classList.remove('titleAlt__item--loading')
    title.classList.remove('titleAlt__item--loadingRight')
  })
})

button.addEventListener('click', e => {
  const button = e.target.parentElement
  button.disabled = true
  document.activeElement.blur()

  if (menuOpen) {
    menuOpen = false
    links.forEach(link => {
      link.classList.add('link--loading')
      link.classList.add('link--loadingRight')
      setTimeout(() => {
        networkMenu.classList.remove('networkMenu--open')
        link.classList.remove('link--loadingRight')
        link.classList.add('link--loadingLeft')
        link.classList.remove('link--show')
      }, 650)
      setTimeout(() => {
        overlay.classList.remove('section--overlayOpen')
        document.body.classList.remove('menuOpen')
      }, 950)
    })
  } else {
    menuOpen = true
    document.body.classList.add('menuOpen')
    overlay.classList.add('section--show')
    overlay.classList.add('section--overlayOpen')
    links.forEach(link => {
      setTimeout(() => {
        link.classList.add('link--loading')
        link.classList.add('link--loadingLeft')
      }, 700)
      setTimeout(() => {
        link.classList.remove('link--loadingLeft')
        link.classList.add('link--loadingRight')
        link.classList.add('link--show')
        networkMenu.classList.add('networkMenu--open')
      }, 1350)
    })
  }

  links.forEach(link => {
    link.addEventListener('animationend', () => {
      if (menuOpen) {
        link.classList.remove('link--loadingRight')
        link.classList.remove('link--loading')
      } else {
        link.classList.remove('link--loadingLeft')
        link.classList.remove('link--loading')
      }
      button.disabled = false
    })
  })

  overlay.addEventListener('transitionend', () => {
    if (menuOpen) {
    } else {
      overlay.classList.remove('section--show')
    }
  })
})
