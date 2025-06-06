const buttons = document.querySelectorAll('.bg-color button');
 buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const color = button.textContent.toLowerCase().trim();
        if(color === 'default'){
            document.body.style.backgroundColor = '';
        }else{
            document.body.style.backgroundColor = color;
        }
    });
 });
