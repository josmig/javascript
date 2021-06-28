
//Eventos de teclado
const buscar = document.querySelector('.busquerda');

//Todo los eventos anteriores se simplifica con solo Input (menos  blur)
buscar.addEventListener('input', (e)=>{
    // console.log(e.target.value);
    if(e.target.value === ''){
      console.log('Fallo la validacion');
    }
})
//funcina cuando des clik por fuera , primero entrar al input y luego salir , excelente para validaciones
buscar.addEventListener('blur', ()=> {
  console.log('El campo es obligatorio**');
  buscar.style.borderColor= 'red';
})


// //cuando presionas una tecla sucede el evento
// buscar.addEventListener('keydown', () => console.log('escribiendo...'));
// //cuando presionas y sueltas la tecla
// buscar.addEventListener('keyup', ()=> console.log('terminando...'));
// //esto nos detecta si se esta copiando el texto de l inpurt
// buscar.addEventListener('copy', ()=> console.log('ALERTA - COPIANDO'));
// //Tambien esta paste cuando pegas algo
// buscar.addEventListener('paste', ()=> console.log('ALERTA - Pegando'));
// //Y Tambienesta cut cuando cortas
// buscar.addEventListener('cut', ()=> console.log('ALERTA - CORTANDO'));
