// Funcion sin retorno (void)
function sinRetornoNiParametros(x: string): void {
  console.log(x);
}

function sumar(x: number, y: number): number {
  return x + y;
}

// Funcion que dentro invoca a otra funcion
function fibonacci(vecesSucesion: number): number[] {
  let numeros = [0, 1];
  let i = 2;

  while (i <= vecesSucesion) {
    numeros[i] = sumar(numeros[i - 2], numeros[i - 1]);
    i++;
  }
  return numeros;
}

sinRetornoNiParametros("Hola");
console.log(sumar(3, 5));
console.log(fibonacci(15));

// Arrow function (Funciones flechas / anonimas)
const sumarArrowFn = (x: number, y: number): number => x + y;

const fibonacciArrowFn = (vecesSucesion: number): number[] => {
  let numeros = [0, 1];
  let i = 2;

  while (i <= vecesSucesion) {
    numeros[i] = sumarArrowFn(numeros[i - 2], numeros[i - 1]);
    i++;
  }
  return numeros;
};

console.log(`fibonacciArrowFn - ${fibonacciArrowFn(3)}`);

// Funciones como tipos
function multiplicar(x: number, y: number): number {
  return x * y;
}

let funcionMultiplicar = multiplicar;
let funcionMultiplicar2: (x: number, y: number) => number;
funcionMultiplicar2 = multiplicar;
console.log(funcionMultiplicar(3, 4));
console.log(funcionMultiplicar2(2, 4));

// Callback
// Pasar como un parametro otra funcion

type Operacion = (valor1: number, valor2: number) => number;

function operacion(x: number, y: number, func: Operacion) {
  return func(x, y);
}

console.log(
  operacion(10, 4, (x: number, y: number): number => {
    return x * y;
  })
);

console.log(
  operacion(10, 4, (x: number, y: number): number => {
    return x + y;
  })
);
// let tipoNever = (cadena: string): never => {while (true)};

// never
let lanzarError = (texto: string) => {
  throw new Error(texto);
};

console.log(lanzarError(" probando "));
