const cardDiv = document.querySelector('.card');
const titleDiv = document.querySelector('.titulo')
const infoDiv = document.querySelector('.info');

//Si un elemento/contenedor cuenta con mas de 1 evento puede llegar a pasar event bubbling , con stopProgation podemos evadir esto

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en el card');
    console.log(e.target);
})
infoDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('Click en info');
})
titleDiv.addEventListener('click', e=>{
    e.stopPropagation();
    console.log('Click en Titulo');
})



