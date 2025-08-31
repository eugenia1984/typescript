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
  console.log(`element: ${element}`)
}

// For ...in -> para recorrer un array con sus indices
for (let element in array) {
  console.log(`element ${element} - ${array[element]}`)
}