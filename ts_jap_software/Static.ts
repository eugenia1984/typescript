// Tanto la propiedad como el metodo pueden ser estaticos
class Ejemplo {
  public num: number;
  static estatico: number;

  public cambiar(n: number) {
    this.num = n;
    Ejemplo.estatico++;
  }

  static metodoEstatico(): void {
    console.log("Hola mundo!");
  }
}

Ejemplo.estatico = 23;
console.log(Ejemplo.estatico);


let e = new Ejemplo();
e.cambiar(30);
Ejemplo.metodoEstatico();
