import './slider'
import modals from './Modules/modals'
import tabs from './Modules/tabs'

//Добавляем подписку на событие
window.addEventListener('DOMContentLoaded', () => {
    modals(); //Событие модальных окон
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active'); //событие табов с передачей Class и Selector
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click'); //событие табов с передачей Class и Selector
});

console.log("Все еще работает");