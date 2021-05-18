const elemento = document.createElement('div');//pasar el nombre del etquieta puede ser mayuscula o minuscula
const enlace = document.createElement('A')

//Agregandole texto
elemento.textContent='Nuevo elemento creado desde JS';
enlace.textContent='Registrate';

//Agregando href
enlace.href = '/nuevo-enlace';
enlace.target='_blank';
enlace.setAttribute('data-enlace','nuevo-enlace')
enlace.classList.add('alguna-clase')
enlace.onclick = miFuncion;

function miFuncion(){
  alert('Diste Click')
}
console.log(elemento,enlace);

//Una vez de creado tenemos que seleccionar la ubiicacion de donde colocar el elemento en el archivo html'

const adddhtml = document.querySelector('.new_valores');
adddhtml.appendChild(elemento)


//agregando en un elemento enlace creado en el contenedor .Enlace1
const a = document.querySelector('.enlace');
console.log(a.children);
a.insertBefore(enlace,a.children[3]); //insertBefore nos da un poco mas de control que appendChild a momento de pasar un elemento
