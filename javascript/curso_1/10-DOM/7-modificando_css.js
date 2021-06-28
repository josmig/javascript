  const estilos = document.querySelector('.contenedor_secondary .card h3')
  estilos.style.backgroundColor='red';
  estilos.style.fontFamily='Arial';
  estilos.style.textTransform='uppercase';
  estilos.style.color='white';
  estilos.style.padding='10px';


const card = document.querySelector('.contenedor_secondary .card')
//viendo la lista de clases del elemento
console.log(card.classList);

//agregando una nueva clases
card.classList.add('nueva-clase','segunda-clase')
//eliminando una clase
card.classList.remove('card') //con esto eliminamos la clase .card (o la que fuera)
console.log(card);
