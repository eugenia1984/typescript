// Protected, solo es accesible desde las clases hijas
// pueden ser protected los atributos como los metodos

class Padre {
  protected nombre: string;

  constructor (n:string) {
    this.nombre = n;
  }

  dameNombre() {
    console.log(`Mi nombre es: ${this.nombre}`)
  }
}

let padre = new Padre("Juan");
padre.dameNombre();

// La clase hija tiene acceso a los atributos y metodos de la clase padre
// y además a sus metodos y atributos propios
class Hijo extends Padre{
  edad: number;

  constructor(n: string, e: number){
    super(n);
    this.edad = e;
  }

  // Sobrrescribo le metodo de la clase padre
  dameNombre() {
    console.log(`Mi nombre es: ${this.nombre}, desde la clase hija!!!`)
  }

  dameEdad():void {
    console.log(`Mi edad es: ${this.edad}`)
  }
}

let hijo = new Hijo("Pedrito", 5);
hijo.dameNombre();
hijo.dameEdad();

// Ejemplo de PROTECTED

class Padre2 {
  protected nombre: string;

  constructor (n:string) {
    this.nombre = n;
  }

  protected dameNombre() {
    console.log(`Mi nombre es: ${this.nombre}`)
  }
}

class Hijo2 extends Padre2 {
  edad: number;

  constructor(n: string, e: number){
    super(n);
    this.edad = e;
  }

  dameNombre() {
    super.dameNombre();
  }

  dameEdad():void {
    console.log(`Mi edad es: ${this.edad}`)
  }
}

// Ejemplo de GETTER y SETTER
class Padre3 {
  private _nombre: string;

  constructor (n:string) {
    this._nombre = n;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }
  
}

let padre3 = new Padre3("Pedro");
console.log(padre3.nombre);
// padre3.nombre("Tato");