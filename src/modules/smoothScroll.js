"use strict"

const smoothScrollFunc = () => {
  const headerLinks = document.querySelectorAll('.menu-list__link')
  const scrollDownBtn = document.querySelector('.main__scroll')
  const testDriveBtn = document.querySelector('.main__button')
  const linksToScroll = [...headerLinks, scrollDownBtn, testDriveBtn]

  linksToScroll.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const ID = event.target.getAttribute('href').substring(1)

      document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}

export default smoothScrollFunc