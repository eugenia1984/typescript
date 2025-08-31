// IF - ELSE
var condicion = true;
if (condicion) {
    console.log("Se ejecuta siempre que la condicion sea verdadera");
}
else {
    console.log("Se ejecuta siempre que la condicion sea falsa");
}
// IF - ELSE IF - ELSE
var num1 = 5;
var num2 = 4;
if (num1 + num2 > 10) {
    console.log("Es mayor a 10");
}
else if (num1 + num2 === 10) {
    console.log("Es igual a 10");
}
else {
    console.log("Es menor a 10");
}
// TERNARY OPERATOR
num1 > num2 ? "num1 es mayor que num2" : "num1 es menor o igual que num2";
// SWITCH
var dia = 2;
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
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log("i: ".concat(i_1));
}
// For...of -> para recorrer un array
var array = ["Hola", "me", "llamo", "Maria"];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log("element: ".concat(element));
}
// For ...in -> para recorrer un array con sus indices
for (var element in array) {
    console.log("element ".concat(element, " - ").concat(array[element]));
}
// WHILE -> siempre primero evalua la condicion y luego ejecuta
var num = 3;
while (num < 57 && num % 2 === 0) {
    console.log("El n\u00FAmero es: ".concat(num));
    num = num * 2;
}
// Operadores para condiciones
// && -> Y -> ambas deben ser true
// || -> OR -> al menos una debe ser true
// DO WHILE -> se ejecuta y uego evalua la condicion
var i = 5;
do {
    console.log("i: ".concat(i));
    i++;
} while (i < 7);
