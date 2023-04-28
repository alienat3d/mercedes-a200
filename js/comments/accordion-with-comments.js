"use strict";

const btn = document.querySelector('.feature__link')
const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

// Альтернативная реализация аккордеона (by Ильясов):
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
    //   Чтобы при открытии остальные закрывались:
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

// Моя реализация аккордеона:
btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    if (btnItem.classList.contains('feature__link_active')) {
      btnItem.classList.remove('feature__link_active')
      lists[index].classList.add('hidden')
    } else {
      btns.forEach((btn) => {
        btn.classList.remove("feature__link_active")
      })

      btnItem.classList.add("feature__link_active")

      lists.forEach((listItem) => {
        listItem.classList.add("hidden")
      })

      lists[index].classList.remove("hidden")
    }
  })
})

// Стрелочную функцию можно использовать только когда у нас однострочная команда:
// btn.addEventListener('click', () => alert('Клик!'))

// Иначе возвращаемся к фигурным скобкам:
// btn.addEventListener('click', () => {
//     console.log('We clicked!')
//     console.log('Hooray!')
// })

// Но мы не можем использовать данный обработчик событий для btns, так как там массив. Значит нужно использовать цикл. И вешаем на каждый элемент через перебор обработчик события по клику.
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }

// Но современный стандарт JS упростил и здесь нам задачу и перебрать массив можно иначе.
// По клику на кнопки нам необходимо добавлять класс активности.
// Кликая по кнопке, мы даём ей класс "feature__link_active", а у всех остальных кнопок мы его удаляем. Внутри addEventListener мы добавляем ещё цикл forEach, чтобы перебирать все кнопки и при нахождении "feature__link_active" мы его удалим, затем присваиваем только кликнутой кнопке.
btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btnItem) => {
      btnItem.classList.remove('feature__link_active')
    })

    btnItem.classList.add('feature__link_active')
    // btnItem.classList.toggle('feature__link_active')

    // Чтобы прятать списки с информацией для каждой кнопки аккордеона добавляем и убираем класс "hidden". Также через перебор.
    lists.forEach((listItem) => {
      listItem.classList.add('hidden')
    })

    lists[index].classList.remove('hidden')
  })
})
// Итак, ещё раз, что выше происходит по клику на определённую кнопку аккордеона:
// 1) Мы переберём все кнопки и удалим у всех кнопок класс "feature__link_active", если он есть;
// 2) Той кнопке, на которую кликнули, мы будем добавлять класс "feature__link_active";
// 3) То же самое делаем и со списками, сперва переберём все списки и каждый из них получит класс "hidden", а значит скроется;
// 4) Внутри нашего массива lists есть индексы. Их столько же, сколько индексов у btns. Когда мы в самом начале перебирали кнопки, мы получали не только итерируемый элемент btnItem, но и его индекс "index". Именно элемент с этим индексом должен удалить класс "hidden", чтобы его список появился.