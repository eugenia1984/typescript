/* STRING */
let texto: string = "Hola";
// Puedo reasignar valor, siempre que sea del mismo tipo de dato
texto = "Hola, que tal?";

/* NUMBER */
let numero: number = 10;
numero = 12.4;

/* BOOLEAN */
let esVerdadero: boolean = true;
esVerdadero = false;

/* COMODIN */
let comodin: any = "Es un String";
comodin = true; // lo paso a boolean

/* CAST */
let texto_desconocido: any = "Esto viene de una petición AJAX";
let frase_final: string = <string>texto_desconocido;