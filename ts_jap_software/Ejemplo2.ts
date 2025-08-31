// TS basic types: number, string,boolean, null, undefiend
let numero: number = 5;
let cadena: string = "Hola";
let soyBooleano:boolean = true;

console.log(`numero: ${numero}`);
console.log(`cadena: ${cadena}`);
console.log(`soyBooleano: ${soyBooleano}`);

const Pruebas = (num1:number, num2:number): number => num1 - num2;
console.log(`Pruebas(2,1): ${Pruebas(2,1)}`);