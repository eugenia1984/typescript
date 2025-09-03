// Interface
interface Animal2 {
  nombre: string;
  edad: number;
  datos(): void;
}

// Clase que extiende de la interface
class Perro2 implements Animal2 {
  nombre: string;
  edad: number;
  datos(): void {
    console.log(`Mi perro se llama ${this.nombre}, tiene ${this.edad} años.`);
  }
}

let miPerro2 = new Perro2();
miPerro2.edad = 2;
miPerro2.nombre = "Perrín";
miPerro2.datos();

// tipo
type Animal3 = {
  nombre: string;
  edad: number;
  datos(): void;
}

let jirafa: Animal3 = {
  nombre: "Jirafín",
  edad: 5,
  datos(): void {
    console.log(`Mi jirafa se llama ${this.nombre}, tiene ${this.edad} años.`);
  }
}

jirafa.datos();