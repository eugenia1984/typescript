// TS basic types: number, string,boolean, null, undefiend, anyno es recomendable usarla, se pierde el tipado()
var numero = 5;
var cadena = "Hola";
var soyBooleano = true;
console.log("numero: ".concat(numero));
console.log("cadena: ".concat(cadena));
console.log("soyBooleano: ".concat(soyBooleano));
var Pruebas = function (num1, num2) { return num1 - num2; };
console.log("Pruebas(2,1): ".concat(Pruebas(2, 1)));
// Ejemplo de any (EVITAR USARLO)
var variasCosas = ["Gato", 3, -4.56, true, null, undefined];
console.log("variasCosas: ".concat(variasCosas));
