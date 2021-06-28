//funcion expresada -> cuando lo metemos dentro de una variable const saludar = funciont(){}
// Funcion declarada -> cuando a  una funcion le damos un nombre functions suma(){}
// la declarada podemos declararla antes en el codigo que la misma funcion pero si es expresada 
// y lo declaramos antes saldria un error

const saludar = ()=> console.log('Hola mundo');
saludar();
const saludo = nombre => console.log(`Hola ${nombre}`); //cuando recibe solo un parametro podemos poner sin parentesis
saludo('Miguel');

//Asi como nos podemos evitar la palabra function , tambien podemos evitar la palabra return
const sumar = (a,b) => a+b;
console.log(sumar(2,2));

//Funcion de varias lineas
const funcionVariasLineas = () =>{
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}
funcionVariasLineas();

//ejemplos usando arrow function
const letras = ['a','b','c','d']; 
letras.forEach((el,i)=> {
    console.log(`El elemento ${el},pertecene a la posición ${i}`);
})

//Forma de declara arrow functions en objetos literales
const persona = {
    nombre:'Jose',
    apellido:'Pantigoso',
    saludo(){
        console.log(this);
    }
};
persona.saludo();