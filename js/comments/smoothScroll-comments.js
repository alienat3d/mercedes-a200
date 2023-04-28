"use strict"

const headerLinks = document.querySelectorAll('.menu-list__link')

// Однако у нас ещё есть кнопка "скроллить вниз", её тоже надо учесть и положить в псевдомассив.
const scrollDownBtn = document.querySelector('.main__scroll')

// Чтобы объединить наш псевдомассив и нашу кнопку из hero, мы можем применить spread-operator. Он объединит все элементы headerLinks и добавит к ним scrollDownBtn. Теперь мы можем перебирать его. [1]
const newArray = [...headerLinks, scrollDownBtn]

// В константе headerLinks у нас лежат все ссылки из шапки псевдомассивом. Мы переберём их методом forEach() и на каждой итерации мы обращаемся к каждой последующей ссылке внутри массива. При каждой итерации на каждую ссылку мы вешаем обработчик событий по событию click и передаём некую callback-function. Это анонимная функция, которую мы передаём в другую функцию.
// Каждый раз, когда какое-то событие происходит у нас на странице, мы можем обратиться к самому событию. То есть получить её из функции, которую мы подаём в addEventListener, например "event". (Можно указывать любое, но "event" или "e" уже принято всеми в JS по умолчанию для событий.
// event.preventDefault() - прекращает стандартное поведение ссылки.
// Чтобы попасть в элемент на котором использовалось событие click используем target.
// У target есть методы setAttribute, чтобы добавить новый аттрибут и getAttribute, чтобы извлечь имеющийся. Нам нужен href, чтобы получить якорную ссылку без адреса.
// Но нам не подходит передаваемая ссылка с решёткой, нам нужны для работы скролла без решётки. Поэтому нам требуется обрезать первый символ, например с помощью метода substr().
// После нахождения нужного нам блока с нужным ID мы применяем к нему метод scrollIntoView с аргументами behavior: 'smooth' (для плавного скролла) и block: 'start' (куда передадим значение того края секции, куда мы хотим прокрутиться)

//[1]: headerLinks.forEach(link => {
newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const ID = event.target.getAttribute('href').substring(1)

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})