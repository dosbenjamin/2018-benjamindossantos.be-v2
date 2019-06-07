'use strict'

const button = document.querySelector('.button__clickArea')
button.addEventListener('click', () => {
  document.body.classList.toggle('menuOpen')
  document.activeElement.blur()
})
