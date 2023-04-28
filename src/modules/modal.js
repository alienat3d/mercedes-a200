"use strict";

const modalFunc = () => {
  const modalBtn = document.querySelector('.more')
  const modal = document.querySelector('.modal')
  const body = document.querySelector('body')

  modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    body.classList.add('body__locked')
  })

  modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
      modal.classList.add('hidden')
      body.classList.remove('body__locked')
    }
  })
}

export default modalFunc