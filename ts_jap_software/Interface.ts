// Interface
// para suplir o simular la herencia multiple ya que una clase puede implementar varias interfaces a la vez

// Es un CONTRATO, donde se especifica las cosas que deben tener una clase
enum especieGato {
  Comun,
  Angora,
  Persa,
  Siames,
}

enum especiePerro {
  PP,
  Doberman,
  Salchicha,
}

interface AnimalInterface {
  nombre: string;
  edad: number;
  datos(): void;
}

class Gato2 implements AnimalInterface {
  // Properties
  nombre: string;
  edad: number;
  esp: especieGato;

  // constructor
  constructor(n: string, e: number, esp: especieGato) {
    this.nombre = n;
    this.edad = e;
    this.esp = esp;
  }

  // Method
  datos(): void {
    console.log(
      `Mi gato se llama ${this.nombre}, tiene ${
        this.edad
      } años y es de la especie ${especieGato[this.esp]}.`
    );
  }
}

class Perro implements AnimalInterface {
  nombre: string;
  edad: number;
  esp: especiePerro;

  datos(): void {
    console.log(
      `Mi perro se llama ${this.nombre}, tiene ${
        this.edad
      } años y es de la especie ${especiePerro[this.esp]}.`
    );
  }
}
const miGato2 = new Gato2("Pepi", 5, especieGato.Comun);
miGato2.datos();

const miPerro = new Perro();
miPerro.edad = 6;
miPerro.nombre = "Toto";
miPerro.esp = especiePerro.PP;
miPerro.datos();
