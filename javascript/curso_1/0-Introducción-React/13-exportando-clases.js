

export default class Tarea{
    constructor(tarea,priori){
        this.tarea = tarea;
        this.priori = priori;
    }
    mostrar(){
        console.log(`La tarea ${this.tarea} , tiene una prioridad ${this.priori}`);
    }
}