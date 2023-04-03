const forms = () => {
    const form = document.querySelectorAll('form')
 
    async function sendData(data) {
       
        return await fetch('/ClassicJS/server.php', {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          body: data
        })
      }
    
    function serializeForm(formNode) {
        return new FormData(formNode)
    }

    form.forEach(item => {
         item.addEventListener('submit', (event) => {
            event.preventDefault();

            const data = serializeForm(item)

            sendData(data)
           
            console.log(Array.from(data.entries()))
        })
    })
}

export default forms;