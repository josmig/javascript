//Objeto Literal
const person ={
    nombre:'Miguel',
    edad:22
}
console.log(person);
//Objeto Constructor

function Tarea(nombre,edad){
    this.nombre=nombre
    this.edad=edad
}

//como llamar a un constructor
const tarea1 = new Tarea('Jose',19)
const tarea2 = new Tarea('Adriana',20)
console.log(tarea1,tarea2);

