// Por defecto es PUBLIC, por eso no se  suele especificar (accesible dentro y fuera de la clase)
// Sino -> public texto: string;

// PRIVATE -> no es accesibl fuera del ambito de la clase
// Se hacen calculos, operaciones internas

class MyObject {
  // private texto: string;
  texto2: string

  constructor(s: string) {
    this.texto2 = s;
  }

  public datos() {
    console.log(this.texto2);
  }
}

let myObject = new MyObject("Testing");
console.log(myObject.datos());

let myObject2 = new MyObject("Testing 2" );
console.log(myObject2.datos());
