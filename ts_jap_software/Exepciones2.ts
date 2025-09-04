// RangeError, ReferenceError, SyntaxError, Type Error, URIError

// RangeError -> array length
try {
  console.log(console, new Array(100000000000000000000000));
} catch (Error) {
  console.log('Error: ${Error}')
} finally {
}

// Syntax error
try {
  let x: number= 2;
  let y: number = 4;
  x***y;
} catch (Error) {
  console.log('Error: ${Error}')
} finally {
}

// DEpurando
class Prueba {
  iteraciones: number;

  constructor(i: number) {
    this.iteraciones = i;
  }

  contador(): void {
    let cont = 0;

    while (cont < this.iteraciones) {
      console.log(`Iteración: ${cont}`);
      cont++;
    }
  }
}

let miPrueba = new Prueba(20);
miPrueba.contador();