"use strict"

const tabsFunc = (tabsHandler, tabsContent, tabsTitle) => {
  const tabsHandlerElements = document.querySelectorAll(tabsHandler)
  const tabsContentElements = document.querySelectorAll(tabsContent)
  const tabsTitleElements = document.querySelectorAll(tabsTitle)

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