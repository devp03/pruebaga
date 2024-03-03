const boton = document.getElementById('btn-n');
const lista = document.getElementById('li-na');



boton.addEventListener('click', ()=>{
    if(lista.style.display == 'block'){
        lista.style.display = 'none'
    }else {
        lista.style.display = 'block';
    }
   
   
})
