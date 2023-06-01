const open = document.getElementById ('open');
const modal_container = document.getElementById ('modal_container');
const close = document.getElementById ('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    // alert('boton SEGUIR MATANDO ha funcionado el click');   TEST  
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    //alert('boton CERRAR ha funcionado');  TEST 
});
