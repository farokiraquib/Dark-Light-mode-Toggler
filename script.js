 const butt = document.getElementById('toggle-button')
 

 butt.addEventListener("click" , () => {
    document.body.classList.toggle("dark")
    butt.classList.toggle("darkBtn")
    
    if (document.body.classList.contains("dark")) {
        butt.innerText = 'Toggle TO Light Mode'
        
    }else{
        butt.innerText = 'Toggle TO Dark Mode'

    }

 })
