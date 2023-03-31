// Переменная модального окна с функцией колбека.

//Версия 2.0
const modals = () => {
    //Принимает 3 параметра
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const   trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);


        //Парам. Тригера нажатия
        trigger.forEach(item => {
            item.addEventListener('click', (event) => {
                if(event.target) {
                    event.preventDefault();
                }
                modal.style.display = 'block';
                document.body.style.overflow ='hidden'; //Старый функционал
            });
        });
        
        //Парам. Нажатия на крестик
        close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow =''; //Старый функционал
        });

        //Парам. Нажатия на свободную область.
        modal.addEventListener('click', (event) => {
            if(event.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow =''; //Старый функционал
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow ='hidden'; //Старый функционал

        }, time)
    }

    //Вызов функции и передача переменных.
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000)
};

export default modals;

//Версия 1.0
// const modals = () => {
//     //Принимает 3 параметра
//     function bindModal(trigger, modal, close) {

//         //Парам. Тригера нажатия
//         trigger.addEventListener('click', (event) => {
//                 if(event.target) {
//                     event.preventDefault();
//                 }
//                 modal.style.display = 'block';
//                 document.body.style.overflow ='hidden'; //Старый функционал
//                 // console.log(callEngineerBtn)
//                 // document.body.classList.add('modal-open') //Функционал через bootstrap
//             });
        
        
//         //Парам. Нажатия на крестик
//         close.addEventListener('click', () => {
//                 modal.style.display = 'none';
//                 document.body.style.overflow =''; //Старый функционал
//                 // console.log(modalEngineerClose)
//                 // document.body.classList.remove('modal-open') //Функционал через bootstrap
//         });

//         //Парам. Нажатия на свободную область.
//         modal.addEventListener('click', (event) => {
//             if(event.target === modal){
//                 modal.style.display = 'none';
//                 document.body.style.overflow =''; //Старый функционал
//                 // console.log(modalEngineer)
//                 // document.body.classList.remove('modal-open') //Функционал через bootstrap
//             }
//         });
//     }
//     //Создание переменных для взаимо действия. // Старый вариант
//     const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
//         modalEngineer = document.querySelector('.popup_engineer'),
//         modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

//     // Вызов функции и передача переменных.
//     bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);

//     //Проверка видимости нажатия
//     // console.log(callEngineerBtn)
//     // console.log(modalEngineer)
//     // console.log(modalEngineerClose)

// };

// export default modals;