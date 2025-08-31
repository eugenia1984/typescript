// IF - ELSE
let condicion: boolean = true;
if (condicion) {
  console.log("Se ejecuta siempre que la condicion sea verdadera");
} else {
  console.log("Se ejecuta siempre que la condicion sea falsa");
}

// IF - ELSE IF - ELSE
let num1: number = 5;
let num2: number = 4;

if (num1 + num2 > 10) {
  console.log("Es mayor a 10");
} else if (num1 + num2 === 10) {
  console.log("Es igual a 10");
} else {
  console.log("Es menor a 10");
}

// TERNARY OPERATOR
num1 > num2 ? "num1 es mayor que num2" : "num1 es menor o igual que num2";

// SWITCH
let dia: number = 2;

switch (dia) {
  case 1:
    console.log("Es Lunes");
    break;

  case 2:
    console.log("Es Martes");
    break;

  case 3:
    console.log("Es Miércoles");
    break;

  case 4:
    console.log("Es Jueves");
    break;

  case 5:
    console.log("Es Viernes");
    break;

  case 6:
  case 7:
    console.log("Es día de Fin de semana");
    break;

  default:
    console.log("Es un número inválido para un día de la semana");
    break;
}

// FOR
for (let i: number = 0; i < 10; i++) {
  console.log(`i: ${i}`);
}

// For...of -> para recorrer un array
let array = ["Hola", "me", "llamo", "Maria"];
for (let element of array) {
  console.log(`element: ${element}`);
}

// For ...in -> para recorrer un array con sus indices
for (let element in array) {
  console.log(`element ${element} - ${array[element]}`);
}

// WHILE -> siempre primero evalua la condicion y luego ejecuta
let num: number = 3;
while (num < 57 && num % 2 === 0) {
  console.log(`El número es: ${num}`);
  num = num * 2;
}

// Operadores para condiciones
// && -> Y -> ambas deben ser true
// || -> OR -> al menos una debe ser true

// Operadores aritmeticos
// + suma
// - resta
// * multipplicacion
// % division
// / resto

// DO WHILE -> se ejecuta y uego evalua la condicion
let i: number = 5;
do {
  console.log(`i: ${i}`);
  i++;
} while (i < 7);

// Ejercicios

// 1 - Devolver los primeros 100 números impares
let numeroImpar: number = 1;

while (numeroImpar <= 100) {
  if(numeroImpar % 2 == 1 )  console.log(`número impar menor a 100 : ${numeroImpar}`);
  numeroImpar++;
}

// otro modo, cn el for
for(let j=0; j < 100; j++) {
  if(j % 2 === 1) console.log(` numero impar con el for: ${j}`)
}

// 2 - Hacer un menú que nos devuelva una opción u otra
let opcion = 3;
switch (opcion) {
  case 1:
    console.log("caso 1");
    break;

  case 2:
    console.log("caso 2");
    break;
    
  case 3:
     console.log("caso 3"); 
    break;  

  default:
    console.log("Otro caso");
    break;
}
