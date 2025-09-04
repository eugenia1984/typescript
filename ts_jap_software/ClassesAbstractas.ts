// Clases abstractas, pueden tener metodos abstractos que seran implementados en las clases que hereden
abstract class Matematicas {
  public x: number;
  public y: number;
  public resultado: number = 0;

  constructor(v1:number, v2: number) {
    this.x = v1;
    this.y = v2;
  }

  abstract operacion(): void;

  mostrarResultado(): void {
    console.log(`El resultado de la operación, es: ${this.resultado}`)
  }
}      

class Suma extends Matematicas {
  constructor(v1: number, v2: number) {
    super(v1, v2);
  }

  operacion():void {
    this.resultado =  this.x + this.y;
  }
}

class Resta extends Matematicas {
  constructor(v1: number, v2: number) {
    super(v1, v2);
  }

  operacion():void {
    this.resultado =  this.x - this.y;
  }
}
let suma = new Suma(3,4);
suma.operacion();
suma.mostrarResultado();

let resta = new Resta(4,2);
resta.operacion();
resta.mostrarResultado();