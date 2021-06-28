const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//primero resive la accion luego una funcion
btn.addEventListener('click', mostrarFoort);

function mostrarFoort(){
  if(footer.classList.contains('activo')){
    footer.classList.remove('activo');
    this.classList.remove('activo');
    this.textContent ='Idioma y Moneda';
  }else{
    footer.classList.add('activo');
    this.classList.add('activo');
    this.textContent='X Cerrar';
  }

  console.log(footer.classList);
}
