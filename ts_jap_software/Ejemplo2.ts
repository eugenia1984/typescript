// TS basic types: number, string,boolean, null, undefiend, anyno es recomendable usarla, se pierde el tipado()
let numero: number = 5;
let cadena: string = "Hola";
let soyBooleano:boolean = true;

console.log(`numero: ${numero}`);
console.log(`cadena: ${cadena}`);
console.log(`soyBooleano: ${soyBooleano}`);

const Pruebas = (num1:number, num2:number): number => num1 - num2;
console.log(`Pruebas(2,1): ${Pruebas(2,1)}`);

// Ejemplo de any (EVITAR USARLO)
let variasCosas: any[] = ["Gato", 3, -4.56, true, null, undefined];
console.log(`variasCosas: ${variasCosas}`);