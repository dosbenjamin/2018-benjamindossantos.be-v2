const button = document.querySelector('.button__clickArea')
button.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen')
})
console.log(button)
// const home = document.querySelector('.section--content:first-child')
// const overlay = document.querySelector('.section--overlay')
// const h1 = document.querySelectorAll('.title__el')

// window.addEventListener('load', e => {
//   body.classList.add('container--load')
// })

// // Firefox Fix //
// let isMozilla = navigator.userAgent.match(/mozilla|Mozilla|MOZILLA/i)
// let isFirefox = navigator.userAgent.match(/firefox|Firefox|FIREFOX/i)
// if (isMozilla && isFirefox) {
//   for (let i = 0; i < h1.length; i++) {
//     h1[i].classList.add('title__el--firefox')
//   }
// }
// // Instagram In-App Browser Fix //
// let isInstagram = navigator.userAgent.match(/instagram|Instagram|INSTAGRAM/i)
// if (isInstagram) {
//   body.classList.add('container--instagram')
// }
