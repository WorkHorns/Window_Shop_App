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
        const { elements } = formNode
        
        const data = new FormData()
        Array.from(elements)   
            
            .map((element) => {
            const { name, value } = element
      
            data.append(name, value)
          })
        
        return data
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