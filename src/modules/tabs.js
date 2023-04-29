"use strict"

const tabsFunc = (tabsHandler, tabsContent, tabsTitle) => {
  const tabsHandlerElements = document.querySelectorAll(tabsHandler)
  const tabsContentElements = document.querySelectorAll(tabsContent)
  const tabsTitleElements = document.querySelectorAll(tabsTitle)

  tabsHandlerElements.forEach((tab, tabIdx) => {
    tab.addEventListener('click', () => {
      tabsHandlerElements.forEach(item => item.classList.remove('design-list__item_active'))
      tab.classList.add('design-list__item_active')

      tabsContentElements.forEach((content) => {
        if (content.dataset.tabsField === tab.dataset.tabsHandler) {
          content.classList.remove('hidden')
        } else {
          content.classList.add('hidden')
        }
      })

      tabsTitleElements.forEach((title, titleIdx) => {
        title.classList.add('hidden')

        if (tabIdx === titleIdx) {
          title.classList.remove('hidden')
        }
      })
    })
  })
}

export default tabsFunc