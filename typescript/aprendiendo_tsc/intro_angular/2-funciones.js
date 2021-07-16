//Funciones
var suma = function (a, b) {
    return a + b;
};
console.log(suma(2, 2));
var operacion = function (a, otroNumero, b) {
    if (b === void 0) { b = 2; }
    return a * b;
};
var resultado = operacion(2, 3);
console.log(resultado);
function curar(personaje, curarX) {
    //en JS siempre retorna algo (undefined)
    personaje.pv += curarX;
    console.log(personaje);
}
var nuevoPersonaje = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP: function () {
        console.log("Puntos de vida", this.pv);
    }
};
curar(nuevoPersonaje, 20);
