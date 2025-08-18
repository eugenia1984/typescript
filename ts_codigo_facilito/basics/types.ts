let month: string = 'Marzo';
let age: number = 20;
let isSenior : boolean = true;
let person: Object = {};
// Dos formas de tipar arrays (la segunda es la mas usada)
let fruits: Array<string> = ['manzana', 'pera'];
let numbers: number[] = [1, 2, 3, 4];

/***** any ******/
// Puede ser de cualquier tipo
// Se suele usar para algun tipo de dato que sea muy dificil de tipar
// Lo mejor es evitar el uso de any
let response: any = 'Hola';
response = 21;
response = true;
response = ['Hola', 123];

/******* void *******/  
// Cuando una funcion no retorna nada
function saludar(): void {
  console.log('Hola');
}

/******** unknown ********/
let response2: unknown;

/*********** null **********/
// no esta disponible o esta vacia
let response3 = null;

/*********** undefined ************/
// no ha sido inicializada, no tiene valor
let response4 = undefined;

/***** combinacion de tipos ******/
type ResponseTypeService = number | undefined;
let response5: ResponseTypeService;

// ? -> operador null safety, aplica si  response 5es distinto a undefined o null
response5?.toString().concat(''); 

/***** type assertion *******/
// castear los tipos de datos con as o con <>
let message: any = '';

// con as
let messageUppercase = (message as string).toUpperCase();

// con <>
let messageLowercase = <string>message;
messageLowercase.toLowerCase();

// const canvas : HTMLElement | null = document.getElementById('canvas');
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
// const canvas =  document.getElementById('canvas') as HTMLCanvasElement;