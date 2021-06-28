const form = document.querySelector('.formulario')

form.addEventListener('submit',validar);

function validar(e){
  e.preventDefault();
  console.log('Buscando...');
  console.log(e.target.action);
}
