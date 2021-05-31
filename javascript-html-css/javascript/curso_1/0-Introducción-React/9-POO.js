
class Tarea{
    constructor(nombre,prioridad){
        this.nombre = nombre
        this.prioridad = prioridad
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad)
        this.cantidad= cantidad;
    }
    //reescribiendo el metodo de la clase Tarea
    mostrar(){
        return `Hola ,${this.nombre} tiene una prioridad muy ${this.prioridad}`
    }
    hola(){
        return 'Holi Boli'
    }
}

//Creando los objetos de tarea1
let tarea1 = new Tarea('Javascript','Alta')
console.log(tarea1.mostrar());
let tarea2 = new Tarea('Java','Medio')
console.log(tarea2.mostrar());


//creando los objetos de Compras Pendientes
let compra1 = new ComprasPendientes('Jabon','Alta',3)
console.log(compra1);
console.log(compra1.mostrar());
console.log(compra1.hola());
