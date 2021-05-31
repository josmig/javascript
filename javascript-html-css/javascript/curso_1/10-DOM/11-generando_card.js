const contenedor = document.querySelector('.contenedor_secondary')

//Creando Card
const parrafo1 =document.createElement('p');
parrafo1.textContent='Concierto'
parrafo1.classList.add('categoria','concierto')

const parrafo2 =document.createElement('p');
parrafo2.textContent='Kiss - Lima 2020'
parrafo2.classList.add('titulo')

const parrafo3 =document.createElement('p');
parrafo3.textContent=' $140 por persona'
parrafo3.classList.add('precio')

const imagen = document.createElement('IMG')
imagen.src='https://mariskalrock.com/wp-content/uploads/2020/01/kiss-documental-web.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'Carro Rojo';

const info = document.createElement('DIV');
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)
console.log(info);



//Card
const card = document.createElement('div');
card.classList.add('card')

//Asignar la imagen
card.appendChild(imagen)
//Asignar info
card.appendChild(info)
console.log(card);


//Mandandole alDOM
contenedor.appendChild(card)
