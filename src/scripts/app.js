const button = document.querySelector('.section__button')
const home = document.querySelector('.section--content:first-child')
const overlay = document.querySelector('.section--overlay')
const body = document.querySelector('.container')
const h1 = document.querySelectorAll('.title__el')

window.addEventListener('load', e => {
  body.classList.add('container--load')
})
button.addEventListener('click', e => {
  home.classList.toggle('section--opacity')
  button.classList.toggle('section__button--open')
  overlay.classList.toggle('section--open')
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.toggle('title__el--switch')
  }
})

// Firefox Fix //
let isMozilla = navigator.userAgent.match(/mozilla|Mozilla|MOZILLA/i)
let isFirefox = navigator.userAgent.match(/firefox|Firefox|FIREFOX/i)
if (isMozilla && isFirefox) {
  for (let i = 0; i < h1.length; i++) {
    h1[i].classList.add('title__el--firefox')
  }
}
// Instagram In-App Browser Fix //
let isInstagram = navigator.userAgent.match(/instagram|Instagram|INSTAGRAM/i)
if (isInstagram) {
  body.classList.add('container--instagram')
}
