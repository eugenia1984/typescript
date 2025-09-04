function identidad<Type>(objeto: Type): Type {
  return objeto;
}

// en esta opcion le asigno un string
let s = identidad("prueba");
console.log(s);

// en esta opcion le asigno un number
let s2 = identidad(123);
console.log(s2);

// ejemplo de clase generica
class NumeroGenerico<NumType> {
  valor: NumType;
  agregar: (x: NumType, y: NumType) => NumType;
}

let miNumero = new NumeroGenerico<Number>();
miNumero.valor = 0;
let resultado = miNumero.agregar(6,8);
console.log(resultado);