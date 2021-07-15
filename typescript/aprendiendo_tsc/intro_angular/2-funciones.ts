

//Funciones
const suma = (a:number ,b:number): number=>{
  return a+b;
}
console.log(suma(2,2));

const operacion = (a:number, otroNumero?:number , b:number = 2): number => a*b
const resultado = operacion(2,3);
console.log(resultado);
