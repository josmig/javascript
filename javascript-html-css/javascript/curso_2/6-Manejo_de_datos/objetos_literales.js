/**
 * 
 * Objetos que literalmente los definimos en un variabble y luego los utilizamos en un objeto.
 * Primero se inicializa luego lo añadimos a un objeto  
 * La declaración de las propiedades del objeto ya estan hechas arriba y por ende en el objeto no lo agregamos esto seria lo nuevo con los objetos literales
 */

let nombre='Mafi',
    edad= 5;

const mascota = {
    nombre,
    edad,
    raza :'Callejero',
    ladra(){
        console.log('Guauuu Guauuuu!!');
    }
}
console.log(mascota);
mascota.ladra();