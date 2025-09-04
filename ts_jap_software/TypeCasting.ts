let cadenaDeTexto: string = "1000";
let numero: number = 8;

console.log(typeof numero); // number
// numero = cadenaDeTexto as any as number;
numero = <number><any>cadenaDeTexto;
console.log(numero); // 1000