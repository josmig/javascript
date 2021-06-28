//

/* function mostrarInformacion(tarea , prioridad){
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`
} */


function Tarea(nombre,urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia
}

//usando prototype "atamos" ciertos metodos,funcioes a un tipo de objetos utilizando el prototype
Tarea.prototype.mostrarInformacion = () => {    
    return `La tarea  ${this.nombre} tiene una prioridad de ${this.urgencia}`
}


const tarea1 = new Tarea('Javascript y React','ALTA')
console.log(tarea1);
console.log(tarea1.mostrarInformacion() );
/* const mostrarInfo = mostrarInformacion(tarea1.nombre,tarea1.urgencia)
console.log(mostrarInfo);
 */
