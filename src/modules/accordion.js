"use strict"

const accordionFunc = () => {
  const btns = document.querySelectorAll('.feature__link')
  const lists = document.querySelectorAll('.feature-sub')

  const openTab = (tab, idx) => {
    tab.classList.add('feature__link_active')
    lists[idx].classList.remove('hidden')
  }
  const closeTab = (tab, idx) => {
    tab.classList.remove('feature__link_active')
    lists[idx].classList.add('hidden')
  }

  btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
      if (btnItem.classList.contains('feature__link_active')) {
        closeTab(btnItem, index)
      } else {
        openTab(btnItem, index)
      }
      btns.forEach((btnItem, idx) => {
        if (index !== idx) {
          btnItem.classList.remove('feature__link_active')
        }
      })
      lists.forEach((listItem, idx) => {
        if (index !== idx) {
          listItem.classList.add('hidden')
        }
      })
    })
  })
}

export default accordionFunc