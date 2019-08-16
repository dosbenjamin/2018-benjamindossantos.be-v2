'use strict'

const button = document.querySelector('.button__clickArea')
const overlay = document.querySelector('.section--overlay')
const links = document.querySelectorAll('.workMenu__item .link')
let menuOpen = false

button.addEventListener('click', e => {
  const button = e.target.parentElement
  button.disabled = true
  document.activeElement.blur()
  document.body.classList.toggle('menuOpen')

  if (menuOpen) {
    links.forEach(link => {
      link.classList.add('link--loadingReverse')
      setTimeout(() => {
        link.classList.add('link--loading')
      }, 350)
      setTimeout(() => {
        link.classList.remove('link--show')
      }, 650)
      link.addEventListener('animationend', () => {
        overlay.classList.add('section--alternate')
        overlay.classList.remove('section--overlayOpen')
      })
    })
    overlay.addEventListener('transitionend', () => {
      overlay.classList.remove('section--alternate')
      button.disabled = false
      menuOpen = false
      console.log(menuOpen)

      console.log('close')
    })
  } else {
    overlay.classList.add('section--overlayOpen')
    links.forEach(link => {
      link.classList.add('link--loading')
      setTimeout(() => {
        link.classList.add('link--loadingReverse')
      }, 350)
      setTimeout(() => {
        link.classList.add('link--show')
      }, 650)
      link.addEventListener('animationend', e => {
        link.classList.remove('link--loadingReverse')
        link.classList.remove('link--loading')
        button.disabled = false
        menuOpen = true
        console.log(menuOpen)

        console.log('open')
      })
    })
  }
})
