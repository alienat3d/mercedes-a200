"use strict";

const modalBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')

modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden')
})

// Закрываем модальное окно по клику на определённых местах.
// "Делегирование" - повесили подслушиватель событий на родительский блок "modal". Далее проверяли какой класс у таргета, по которому мы кликнули. Здесь это намного более удобное решение, чем вешать сразу на много разных элементов подслушиватель событий.
modal.addEventListener('click', (event) => {
  const target = event.target
//   Проверяем класс на элементе, по которому мы кликаем. И если он содержит "overlay" или "modal__close", то модальное окно закроется.
  if (target.classList.contains('overlay') || ('modal__close')) {
    modal.classList.add('hidden')
  }
})