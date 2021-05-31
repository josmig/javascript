const nav = document.querySelector('.menu__main .menu__main-ul')
console.log(nav);
console.log(nav.childNodes); //nos lista los nodos que viene hacer los hijos pero lo curioso es que los espacios en blanco son considerados elementos
console.log(nav.children);//los espacios en blanco no son considerados elementos

//seleccionando del menu el primero y ultimo elemento
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

//Seleccionando los cards
//,children nos selecciona los hijos

//Recorre los elementos dentro de un contenedor es considerado Traversing The Dom
//Traversing de Padre a hijo
const card = document.querySelector('.card')
card.children[0].textContent='Hello World!'
console.log(card.children[0].textContent);
console.log(card.children);

//Traversing de hijo a padre
console.log(card.parentNode); //igual toma en cuenta los espacio en blanco
console.log(card.parentElement);

//Para seleccionar al hermano dentro de un contenedor

console.log(card.nextElementSibling); //va al siguiente
console.log(card.previousSibling);  //regresa un elemento antes
