const nav = document.querySelector('.navegacion');

//Agregando Eventos
//click --> cuando das click
//mouseenter --> cuando entrar a  la navegacion
//mouseout --> cuando sales de la navegacion
//mousedown --> similiar al click
//mouseup --> cuando se da click pero se suelta el mouseup
//dblclick --> doble click para que funcione


nav.addEventListener('mouseenter', () => {
  console.log('Entrando a la navegación');
  nav.style.backgroundColor='transparent';
})
nav.addEventListener('mouseout', ()=>{
  console.log('Saliendo de la navegacion');
  nav.style.backgroundColor= '#b1355f';
})
