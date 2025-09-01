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
