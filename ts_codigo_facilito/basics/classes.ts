// Clase -> un molde para crear objetos
class Animal {
  // properties / attributes
  name: string; // public property -> disponible para todos
  private age = 10; // private property/attribute -> se encapsula el dato, solo disponible dentro de la clase
  protected identity = "111"; // protected property/attribute -> disponible en las clases a las que se extiende

  // constructor
  constructor(name: string) {
    this.name = name;
  }

  // methods
  sayHi() {
    console.log("Grr", this.age); // con .this puedo ver la propiedad privada
  }
}

const myAnimal: Animal = new Animal('Perrito');
myAnimal.sayHi();

// Herencia -> se extiende la funcionalidad a otra clase
class Doggy extends Animal {

  constructor() {
    super('Perro'); // siempre primero con super se llama aal constructor de la clase padre

    console.log("Perro registrado");
  }
  sayHi() {
    this.identity;
  }
}

const myDoggy: Doggy = new Doggy();
myDoggy.sayHi();
