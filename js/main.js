import './slider'
import modals from './modules/modals'
import tabs from './modules/tabs'
import forms from './modules/forms';

//Добавляем подписку на событие
window.addEventListener('DOMContentLoaded', () => {
    modals(); //Событие модальных окон
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active'); //событие табов с передачей Class и Selector
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click'); //событие табов с передачей Class и Selector
    tabs('.balcon_icons','.balcon_icons_img','.big_img > img','do_image_more','inline-block');
    forms();
});

console.log("Все еще работает");