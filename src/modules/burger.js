"use strict";

const burgerFunc = (burgerMenu, headerMenu, headerMenuItems) => {
  const hamburgerMenu = document.querySelector(burgerMenu)
  const menuList = document.querySelector(headerMenu)
  const menuItemsList = document.querySelectorAll(headerMenuItems)
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