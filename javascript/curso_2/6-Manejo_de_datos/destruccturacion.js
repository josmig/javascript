
//Destruccutracion(Disponible desde el ECMASCRIPT5 2015) de arreglos y objetos conJS

let numeros = [1,2,3];
//Si queremos asignar cada valor del array a una variable lo podemos hacer con la destructuracion
//Sin Destructuración (codigo de mas)
let uno = numeros[0],
    dos = numeros[1],
    tres= numeros[2];
console.log(uno,dos,tres);

//Con destructuración
const [a,b,c] = numeros;
console.log(a,b,c);

//Destructuración con un objeto
const persona = {
    nombre:'Miguel',
    apellido:'Pantigoso',
    edad:23
};

const {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);