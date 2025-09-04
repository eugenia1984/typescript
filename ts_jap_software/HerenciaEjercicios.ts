// 1 - Crear una superclase animal que nos diga si el animal es domestico o no
// el tiempo de gestación y que el domestico se pueda modificar con getter y setter
class AnimalClass {
  private _domestico: boolean;
  protected readonly _mesesGestacion: number;

  constructor(dom: boolean, mesesGest: number) {
    this._domestico = dom;
    this._mesesGestacion = mesesGest;
  }

  get domestico(): boolean {
    return this._domestico;
  }

  set domestico(value: boolean) {
    this._domestico = value;
  }
}

// 2 - Crear una clase mamifero y otra ave que hereden de animal
class MamiferoClass extends AnimalClass {
  protected _capazNadar: boolean;

  constructor(dom: boolean, mesesGest: number, cn: boolean) {
    super(dom, mesesGest);
    this._capazNadar = cn;
  }
}

class AveClass extends AnimalClass {
  protected _envergaduraAlas: number;

  constructor(dom: boolean, mesesGest: number, ea: number) {
    super(dom, mesesGest);
    this._envergaduraAlas = ea;
  }
}

// 3 - Crear una clase gato y otra aguila que hereden de las clases correspondientes
class GatoClass extends MamiferoClass {
  private _especie: string;

  constructor(dom: boolean, mesesGest: number, cn: boolean, esp: string) {
    super(dom, mesesGest, cn);
    this._especie = esp;
  }

  // Getter y setter
  get capazNadar(): boolean {
    return this._capazNadar;
  }

  get especie(): string {
    return this.especie;
  }

  set capazNadar(value: boolean) {
    this._capazNadar = value;
  }

  set especie(value: string) {
    this.especie = value;
  }

  // Methodo para ver datos
  getData(): void {
    console.log(
      `Gato --- domestico: ${this.domestico}, meses de gestacion: ${this._mesesGestacion}, es capaz de nadar: ${this.capazNadar}, su especie es: ${this._especie}.`
    );
  }
}

class AguilaClass extends AveClass {
  private _numeroEjemplares: number;

  constructor(dom: boolean, mesesGest: number, ea: number, ne: number) {
    super(dom, mesesGest, ea);
    this._numeroEjemplares = ne;
  }

  // getter y setter
  get envergaduraAlas(): number {
    return this._envergaduraAlas;
  }

  get numeroEjemplares() {
    return this._numeroEjemplares;
  }

  set envergaduraAlas(value: number) {
    this._envergaduraAlas = value;
  }

  set numeroEjemplares(value: number) {
    this._numeroEjemplares = value;
  }
}

// Creo un gato y con un getter cambio un dato
let gatoObject = new GatoClass(true, 3, false, "Angora");
gatoObject.getData();
gatoObject.domestico = false;
gatoObject.getData();

// creo un objeto de clase AguilaClass
let aguilaObject = new AguilaClass(true, 5, 2, 3);
console.log(
  ` aguilaObject : { domestico: ${aguilaObject.domestico}, envergaduraDeAlas: ${aguilaObject.envergaduraAlas}, numeroDeEjemplares: ${aguilaObject.numeroEjemplares}}`
);
