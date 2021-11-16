//Capturar envento se submit do fomulário
const form = document.querySelector('#formulario')
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('evento previnido');

});