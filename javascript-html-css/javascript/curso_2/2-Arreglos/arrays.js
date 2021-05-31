
/**Declarcion de un arreglo */

const a = []
const b = [true,1,2,"Hola",['A','B','C']]; /**En los arreglos podemos añadir cualquier tipo de dato */
const c = [1,2,3,"asdasd",[3,2,1,[true,false,23.23]]];
console.log(a);
console.log(b);
console.log(b[4][2]);
console.log(c[4][3][1]); //Accediend a valores "profundos"

/**Otro forma de crear arreglos */
const d = Array.of("X","Y","Z",9,8,7);
console.log(d);

/**Otro forma de definir arrelgos y darles un valor incial */
const e = Array(100).fill(true) //Fill -> nos permite rellenar valores 
console.log(e);

/**Forma "antigua" de uso que casi ya nadie utiliza */
const f = new Array();
console.log(f);

/**Eliminar y agregar valores aun arreglo*/
const colores = ['Rojo','Verde','Amarillo'];
console.log(colores);
colores.push('Negro'); //add
console.log(colores);
colores.pop(); //delete last 
console.log(colores);

//Usando el metodo forEach()
colores.forEach((element,index)=> { //Una forma para recorrer un array elemente(valor),index(posicion)
    console.log(`<li id="${i}">${e}</li>`);
})
