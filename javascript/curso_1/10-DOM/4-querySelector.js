//Quey Selector Retorna el primer elemnto y maximo 1
//podemos seleccionar etiquetas,clases y id

//seleccionando el card
const card = document.querySelector('.card')
console.log(card);

//podemos tener selectores especificos como enCSS | dos o mas valores
const info= document.querySelector('.card .info');

//seleccionar el sgundo card de hospedaje
const i = document.querySelector('section.hospedaje .card:nth-child(2)');

//seleccionar un formulario
const form = document.querySelector('#formulario');

// elementos html
const elementos = document.querySelector('nav')
console.log(elementos);
