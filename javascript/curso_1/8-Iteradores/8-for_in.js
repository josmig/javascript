
let pendiente = ['tarea','aprender javascript','comer']

//for in aplica dentro de los objetos. En los arrelgos normales nos bota lo que es el indice

for(let p in pendiente){
  console.log(p);
}

//Pero si aplicamos a un objetos
const persona ={
    nombre: 'Miguel',
    apellido:'Pantigoso',
    edad:22,
    signo:'Acuario'
}

for(let p in persona){
  console.log(`${p} : ${persona[p]}`);
}


//iterando un objeto con Object.entries
//for(let [llave,valor] of Object.entries(persona)){
//  console.log(`${llave} : ${valor}`);
//}
