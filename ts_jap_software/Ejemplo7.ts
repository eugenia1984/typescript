// Union types -> se detalla el tipo de datos que puede tomar la variable
let numeroOrBooleano: number | boolean = 1;
console.log(`numeroOBooleano: ${numeroOrBooleano}`);
numeroOrBooleano = true;
console.log(`numeroOBooleano con nuevo valor: ${numeroOrBooleano}`);

// Literal
let animal: "gato";
console.log(`animal: ${animal}`); // undefiend