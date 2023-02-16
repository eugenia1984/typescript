// : string luego de los () me indica que retorna String
function saludo(nombre: string): string {
  return `Un saludo para ${ nombre }`;
}

// Con VOID indico que no retorna
function mostrarFecha(): void {
  console.log("20 - 07 -2023");
}

// Con NEVER indico que FINALIZA la ejecución
function finApp(): never {
  throw new Error("La aplicación se ha cerrado...");
}

// Parámetros en funciones
function mostrarPais(pais: string, continente?: string): string { // ? indica que ese parametro es opcional
  let resultado: string = "Faltan datos";
  if (pais && continente) {
    resultado = pais + " " + continente;
  }
  return resultado;
}
/*
Si ejecuto aca: finApp()
no se ejecutan las funciones que siguen
*/
console.log(saludo("todos"));
mostrarFecha();
console.log(mostrarPais("España", "Europa"));
console.log(mostrarPais("Italia"));

// Tipo Funcion
let grupos: (datos: string[]) => string;

grupos = function (datos) {
  return "Mis grupos favoritos son: " + datos.toString();
}
console.log(grupos(["Jesse & Joy", "Sam Smith", "Clean Bandit"]));