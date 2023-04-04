import { postData } from '../services/service';

const forms = () => {
    const form = document.querySelectorAll('form')
    
    const message = {
        loading: 'Load',
        success: 'OK',
        fail: 'Fail'
    };

    function serializeForm(formNode) {
        console.log(message.loading);
        return new FormData(formNode)
    }

    form.forEach(item => {
         item.addEventListener('submit', (event) => {
            event.preventDefault();
           
            const data = serializeForm(item)
            
            try {
                console.log(message.success);
                postData(data)
            } catch {
                console.log(message.fail);
            }
           
            console.log(Array.from(data.entries()))
        })
    })
}

export default forms;
