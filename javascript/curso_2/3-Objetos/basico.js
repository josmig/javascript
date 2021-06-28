/** Un objeto es una coleccion de llaves y valores */

let a = new String("Hola"); //Objeto String
/* console.log(a); */

/**Formas de crear un objeto */
const b = {};
/* console.log(b); */

const c = new Object();
/* console.log(c); */

/**Creando un objeto  */
/**Dentro de un objeto a las variables se le van a llamar atributos / propiedades y las funciones
 * se les llamda metodos
 */

const datos = {
    nombre: "Miguel",
    edad: 23,
    hobby: ["Music","Videogames","Learn"],
    soltero: true,
    contacto: {
        email:'pantigosomiguel59@gmail.com',
        tel:'979529948 - 922801666',
        twitter:'@josmig',        
    },
    profession: 'Ingeniero de sistemas',
    especialidad: 'Desarrollador Web  - UX/UI Designer',
    saludar(){
        console.log('Hola :)')
    },
    decirMiNombre(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};
console.log(datos);
console.log(datos.nombre);
console.log(datos.hobby[1]);
console.log(datos.contacto.twitter);
datos.saludar();
datos.decirMiNombre();
console.log(Object.keys(datos)); //Nos bota todas las llaves
console.log(Object.values(datos)); // Nos bota los valores de las llaves
console.log(datos.hasOwnProperty('nombre')); //Con esto decimos si el objeto contiene una propiedad ese nombre
console.log(datos.hasOwnProperty('nacimiento')); //deberia botar false porque el objeto no cuenta con eso