// Class
// Estructura pre definida que sirve como molde para crear objetos

enum especie {
  Comun,
  Angora,
  Siames,
  Persa,
}

class Gato {
  // Properties / Attributes
  nombre: string;
  edad: number;
  esp: especie;

  // constructor
  constructor(n: string, e: number, esp: especie) {
    this.nombre = n;
    this.edad = e;
    this.esp = esp;
  }

  // Method
  datosGato(): void {
    console.log(
      `Mi gato se llama ${this.nombre}, tiene ${
        this.edad
      } años y es de la especie ${especie[this.esp]}.`
    );
  }
}

let miGato = new Gato("Garfield", 7, especie.Angora);
miGato.datosGato();
