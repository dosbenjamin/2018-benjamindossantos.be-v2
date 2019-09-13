'use strict'

const button = document.querySelector('.button__clickArea')
const overlay = document.querySelector('.section--overlay')
const links = document.querySelectorAll('.link--big')
const networkMenu = document.querySelector('.networkMenu')
const title = document.querySelector('.title--switch')
let menuOpen = false
let ended = false

button !== null &&
  button.addEventListener('click', e => {
    const button = e.target.parentElement
    button.style.pointerEvents = 'none'
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
      link.style.pointerEvents = 'none'
      link.addEventListener('animationend', e => {
        if (menuOpen) {
          link.classList.remove('link--loading')
          link.classList.remove('link--loadingRight')
          link.style.removeProperty('pointer-events')
          button.style.removeProperty('pointer-events')
        } else {
          link.classList.remove('link--loadingLeft')
          link.classList.remove('link--loading')
        }
      })
    })

    overlay.addEventListener('transitionend', e => {
      if (!menuOpen && e.propertyName === 'transform' && e.target === overlay) {
        overlay.classList.remove('section--show')
        button.style.removeProperty('pointer-events')
      }
    })
  })

links.forEach(link => {
  link.addEventListener('transitionend', e => {
    if (e.elapsedTime === 0.7 && e.propertyName === 'transform') {
      ended = true
      e.target.classList.remove('link--loadingRight')
    } else {
      ended = false
    }
  })
  link.addEventListener('mouseenter', () => {
    ended = false
  })
  link.addEventListener('mouseout', e => {
    ended && e.target.classList.add('link--loadingRight')
  })
})

navigator.userAgent.search('Chrome') > -1 && navigator.userAgent.search('Windows') > -1 && title.classList.add('title--win')
