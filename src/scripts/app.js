const button = document.querySelector('.button__clickArea')
button.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen')
  document.activeElement.blur()
})
// const home = document.querySelector('.section--content:first-child')
// const overlay = document.querySelector('.section--overlay')
