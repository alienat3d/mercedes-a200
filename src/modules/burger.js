"use strict";

const burgerFunc = () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const menuList = document.querySelector('.menu')
  const menuItemsList = document.querySelectorAll('.menu-list__item')
  const toggleMenu = () => {
    menuList.classList.toggle('menu-active')
    hamburgerMenu.classList.toggle('hamburger-menu-active')
  }
  const closeMenu = () => {
    menuList.classList.remove('menu-active')
    hamburgerMenu.classList.remove('hamburger-menu-active')
  }

  hamburgerMenu.addEventListener('click', () => toggleMenu())

  menuItemsList.forEach(link => {
    link.addEventListener('click', () => closeMenu())
  })
}

export default burgerFunc