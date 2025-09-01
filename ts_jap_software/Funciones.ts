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