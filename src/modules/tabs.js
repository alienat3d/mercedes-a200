"use strict"

const tabsFunc = () => {
  const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]')
  const tabsContentElements = document.querySelectorAll('[data-tabs-field]')
  const tabsTitleElements = document.querySelectorAll('.design__title')

  for (let btn of tabsHandlerElements) {
    btn.addEventListener('click', () => {
      tabsHandlerElements.forEach(item =>
        item.classList.remove('design-list__item_active'))
      btn.classList.add('design-list__item_active')

      tabsContentElements.forEach(content => {
        if (content.dataset.tabsField === btn.dataset.tabsHandler) {
          content.classList.remove('hidden')
        } else {
          content.classList.add('hidden')
        }
      })

      tabsTitleElements.forEach(title => {
        if (title.classList.contains('hidden')) {
          title.classList.remove('hidden')
        } else {
          title.classList.add('hidden')
        }
      })
    })
  }
}

export default tabsFunc