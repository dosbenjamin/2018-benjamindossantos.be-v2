'use strict'

const button = document.querySelector('.button__clickArea')
const overlay = document.querySelector('.section--overlay')
const links = document.querySelectorAll('.workMenu__item .link')
const networkMenu = document.querySelector('.networkMenu')
let menuOpen = false

button.addEventListener('click', e => {
  const button = e.target.parentElement
  button.disabled = true
  document.activeElement.blur()
  console.log(menuOpen)

  if (menuOpen) {
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

  overlay.addEventListener('transitionend', e => {
    if (menuOpen && e.propertyName === 'transform') {
      overlay.classList.remove('section--show')
      button.disabled = false
      menuOpen = false
    }
  })

  links.forEach(link => {
    link.addEventListener('animationend', () => {
      if (menuOpen) {
        link.classList.remove('link--loadingLeft')
        link.classList.remove('link--loading')
      } else {
        link.classList.remove('link--loadingRight')
        link.classList.remove('link--loading')
        menuOpen = true
        button.disabled = false
      }
    })
  })
})
