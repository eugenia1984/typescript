// Definir una interfaz Vehiculo que tiene que implementar la clase Coche
// y la clase abstracta VehiculoPesado que posteriormente sera implementado por la clase Camion
interface Vehiculo {
  velocidad: number;
  peso: number;
  color: string;

  dameVelocidad(): void;
  damePeso(): void;
  dameColor(): void;
}

class Coche implements Vehiculo {
  velocidad: number;
  peso: number;
  color: string;

  constructor(vel: number, p: number, c: string) {
    this.velocidad = vel;
    this.peso = p;
    this.color = c;
  }

  dameVelocidad(): void {
    console.log(`La velocidad es: ${this.velocidad}`);
  }
  damePeso(): void {
    console.log(`El peso es: ${this.peso}`);
  }
  dameColor(): void {
    console.log(`El color es: ${this.color}`);
  }
}

abstract class VehiculoPesado implements Vehiculo {
  velocidad: number;
  peso: number;
  color: string;
  numeroRuedas: number;

  constructor(vel: number, p: number, c: string, nr: number) {
    this.velocidad = vel;
    this.peso = p;
    this.color = c;
    this.numeroRuedas = nr;
  }

  // sera implementado en al clase hija
  abstract dameNumeroRuedas(): void;

  dameVelocidad(): void {
    console.log(`La velocidad del Vehiculo Pesado es: ${this.velocidad}`);
  }
  damePeso(): void {
    console.log(`El peso del Vehiculo Pesado es: ${this.peso}`);
  }
  dameColor(): void {
    console.log(`El color del Vehiculo Pesado es: ${this.color}`);
  }
}

class Camion implements VehiculoPesado {
  velocidad: number;
  peso: number;
  color: string;
  numeroRuedas: number;


  constructor(vel: number, p: number, c: string, nr: number) {
    this.velocidad = vel;
    this.peso = p;
    this.color = c;
    this.numeroRuedas = nr;
  }

  dameNumeroRuedas(): void {
    console.log(`El número de ruedas del Camion es: ${this.numeroRuedas}`);
  }

  dameVelocidad(): void {
    console.log(`La velocidad del Camion es: ${this.velocidad}`);
  }
  damePeso(): void {
    console.log(`El peso del Camion es: ${this.peso}`);
  }
  dameColor(): void {
    console.log(`El color del Camion es: ${this.color}`);
  }
}

let coche = new Coche(100, 230, "Gris");
coche.dameVelocidad();
coche.damePeso();
coche.dameColor();

let camion = new Camion(120, 10000, "blanco", 18);
camion.dameColor();
camion.dameNumeroRuedas();
camion.damePeso();
camion.dameVelocidad();
