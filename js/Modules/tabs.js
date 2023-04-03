//Переменная табов
//Версия 1.0
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    //Функция Табов
    //Принимает 3 параметра
    const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

    //Функция скрытия
    function hideTabContent() {
        //Перебираем контент и скрываем его
        content.forEach(item => {
            item.style.display ='none';
        });
        //Перебираем табы и скрываем их
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });

    }
    //Функция показа по 
    function showTabContent(id = 0) {
        //Показываем контент по полученому Id
        content[id].style.display = display;
        //Добавляем таб по полученому Id
        tab[id].classList.add(activeClass)
    }

    hideTabContent();
    showTabContent();
   

    //Подписываемся на события заголовков
    header.addEventListener('click', (event) => {
        const target = event.target;
        //Проверка на то что элемент выделен
        if(target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            //Проходим по табам 
            tab.forEach((item, id) => {
                //Проверяем соответствует ли target и tab.item и получаем id  
                if(target == item || target.parentNode == item) {
                    //Скрываем весь контент
                    hideTabContent();
                    //Показываем контент связанный с этим Id
                    showTabContent(id);
                }
            })
        }
    })


};

export default tabs;