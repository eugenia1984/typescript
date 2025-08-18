var month = 'Marzo';
var age = 20;
var isSenior = true;
var person = {};
// Dos formas de tipar arrays (la segunda es la mas usada)
var fruits = ['manzana', 'pera'];
var numbers = [1, 2, 3, 4];
/***** any ******/
// Puede ser de cualquier tipo
// Se suele usar para algun tipo de dato que sea muy dificil de tipar
// Lo mejor es evitar el uso de any
var response = 'Hola';
response = 21;
response = true;
response = ['Hola', 123];
/******* void *******/
// Cuando una funcion no retorna nada
function saludar() {
    console.log('Hola');
}
/******** unknown ********/
var response2;
/*********** null **********/
// no esta disponible o esta vacia
var response3 = null;
/*********** undefined ************/
// no ha sido inicializada, no tiene valor
var response4 = undefined;
var response5;
// ? -> operador null safety, aplica si  response 5es distinto a undefined o null
response5 === null || response5 === void 0 ? void 0 : response5.toString().concat('');
/***** type assertion *******/
// castear los tipos de datos con as o con <>
var message = '';
// con as
var messageUppercase = message.toUpperCase();
// con <>
var messageLowercase = message;
messageLowercase.toLowerCase();
// const canvas : HTMLElement | null = document.getElementById('canvas');
var canvas = document.getElementById('canvas');
// const canvas =  document.getElementById('canvas') as HTMLCanvasElement;
