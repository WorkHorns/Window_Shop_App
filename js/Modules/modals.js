//Переменная модального окна с функцией колбека.
const modals = () => {
    //Принимает 3 параметра
    function bindModal(trigger, modal, close) {
        //Парам. Тригера нажатия
        trigger.addEventListener('click', (event) => {
            if(event.target) {
                event.preventDefault();
            }
            modal.style.display = 'block';
            document.body.style.overflow ='hidden';
            // console.log(callEngineerBtn)
        });
        
        //Парам. Нажатия на крестик
        close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow ='';
                // console.log(modalEngineerClose)
        });

        //Парам. Нажатия на свободную область.
        modal.addEventListener('click', (event) => {
            if(event.target === modal){
                modal.style.display = 'none';
                document.body.style.overflow ='';
                // console.log(modalEngineer)
            }
        });
    }
    //Создание переменных для взаимо действия.
    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    //Вызов функции и передача переменных.
    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);

    //Проверка видимости нажатия
    // console.log(callEngineerBtn)
    // console.log(modalEngineer)
    // console.log(modalEngineerClose)

};

export default modals;