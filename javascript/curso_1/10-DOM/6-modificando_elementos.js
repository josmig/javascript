const cabecera = document.querySelector('.contenido-hero h1').textContent
console.log(cabecera);


//console.log(cabecera.innerText);//si en el css el elemento esta con visibility:hiden no lo encontrara
//console.log(cabecera.textContent); // pero este si
//console.log(cabecera.innerHTML); //Nos trae el HTML tambien

const nuevo = 'Saludos desde Perú amiguitos'
document.querySelector('.contenido-hero h1').textContent = nuevo


//modificando una imagen
const imagen = document.querySelector('.contenido-hero img');
imagen.src='https://naldzgraphics.net/wp-content/uploads/2017/02/1-leaderboard-ui-design.jpg';
console.log(imagen);
