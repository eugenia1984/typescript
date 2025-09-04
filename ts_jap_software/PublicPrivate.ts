// Por defecto es PUBLIC, por eso no se  suele especificar (accesible dentro y fuera de la clase)
// Sino -> public texto: string;

// PRIVATE -> no es accesibl fuera del ambito de la clase
// Se hacen calculos, operaciones internas


// READ ONLY, se utiliza en atributos
// la propiedad es accesible desde todas partes de la aplicación, pero es solo lectura, no se le puede asignar valor
// Se puede inicializar el valor en el constructor
class MyObject {
  // private texto: string;
  texto2: string
  public readonly texto3: string;

  constructor(s: string) {
    this.texto2 = s;
    this.texto3 = "Probando..."
  }

  public datos() {
    console.log(this.texto2);
  }
}

let myObject = new MyObject("Testing");
// console.log(myObject.datos());
console.log(myObject.texto3);

let myObject2 = new MyObject("Testing 2" );
// console.log(myObject2.datos());
console.log(myObject2.texto3);