// Funcion sin retorno (void)
function sinRetornoNiParametros(x) {
    console.log(x);
}
function sumar(x, y) {
    return x + y;
}
// Funcion que dentro invoca a otra funcion
function fibonacci(vecesSucesion) {
    var numeros = [0, 1];
    var i = 2;
    while (i <= vecesSucesion) {
        numeros[i] = sumar(numeros[i - 2], numeros[i - 1]);
        i++;
    }
    return numeros;
}
sinRetornoNiParametros("Hola");
console.log(sumar(3, 5));
console.log(fibonacci(15));
// Arrow function (Funciones flechas / anonimas)
var sumarArrowFn = function (x, y) { return x + y; };
var fibonacciArrowFn = function (vecesSucesion) {
    var numeros = [0, 1];
    var i = 2;
    while (i <= vecesSucesion) {
        numeros[i] = sumarArrowFn(numeros[i - 2], numeros[i - 1]);
        i++;
    }
    return numeros;
};
console.log("fibonacciArrowFn - ".concat(fibonacciArrowFn(3)));
// Funciones como tipos
function multiplicar(x, y) {
    return x * y;
}
var funcionMultiplicar = multiplicar;
var funcionMultiplicar2;
funcionMultiplicar2 = multiplicar;
console.log(funcionMultiplicar(3, 4));
console.log(funcionMultiplicar2(2, 4));
function operacion(x, y, func) {
    return func(x, y);
}
console.log(operacion(10, 4, function (x, y) {
    return x * y;
}));
console.log(operacion(10, 4, function (x, y) {
    return x + y;
}));
// let tipoNever = (cadena: string): never => {while (true)};
// never
var lanzarError = function (texto) {
    throw new Error(texto);
};
console.log(lanzarError(" probando "));
