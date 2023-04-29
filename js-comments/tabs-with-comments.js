"use strict"
//* 30th min of video*
// Сперва нам необходимо получить кнопки, блоки с текстом и блоки с картинками.
// Мы вполне можем работать и с атрибутами тегов:
const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]')
// Также нам необходимо менять при смене активного таба текстовый блок под ним. Для этого снова соберём их в переменную:
const tabsContentElements = document.querySelectorAll('[data-tabs-field]')
const tabsTitleElements = document.querySelectorAll('.design__title')

// Переберём полученный псевдомассив "tabsHandlerElements" с помощью метода "for-of".
// Сперва укажем переменную, в которую при каждой итерации будет попадать элемент.
// Теперь по клику нам нужно перебрать все кнопки и удалить этот класс у всех кнопок.
// Далее на кнопку, по которой кликнули, нужно добавить этот класс.

// Через свойство "dataset" мы можем обращаться к любому data-атрибуту элемента в вёрстке. Также мы можем добавлять новые позиции в dataset просто добавляя новые data-атрибуты в вёрстку.
// Теперь осталось при каждом клике перебрать псевдомассив "tabsContentElements", найти те элементы, чей data-атрибут своим значением сходится с data-атрибутом btn и если они сойдутся, то нам нужно убрать класс "hidden", а если не сходятся, то нужно его установить.
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
    // Один из вариантов переключения заголовков табов.
    // tabsTitleElements.forEach((title) => title.classList.toggle('hidden'))
    // Другой (мой) вариант. Третий в tabs.js без "for-of", а с forEach.
    tabsTitleElements.forEach(title => {
      if (title.classList.contains('hidden')) {
        title.classList.remove('hidden')
      } else {
        title.classList.add('hidden')
      }
    })
  })
}

