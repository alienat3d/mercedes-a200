import accordionFunc from './modules/accordion'
import burgerFunc from './modules/burger'
import modalFunc from './modules/modal'
import sendFormFunc from './modules/sendForm'
import smoothScrollFunc from './modules/smoothScroll'
import tabsFunc from './modules/tabs'

accordionFunc('.feature__link', '.feature-sub')
burgerFunc('.hamburger-menu', '.menu', '.menu-list__item')
modalFunc('.more', '.modal')
sendFormFunc('.form-test-drive')
smoothScrollFunc('.menu-list__link', '.main__scroll', '.main__button')
tabsFunc('[data-tabs-handler]', '[data-tabs-field]', '.design__title')