// Clase -> un molde para crear objetos
class Animal {
  // properties / attributes
  name: "Generic animal"; // public property -> disponible para todos
  private age = 10; // private property/attribute -> se encapsula el dato, solo disponible dentro de la clase
  protected identity = "111"; // protected property/attribute -> disponible en las clases a las que se extiende
  
  // constructor
  constructor() {}

  // methods
  sayHi() {
    console.log("Grr", this.age); // con .this puedo ver la propiedad privada
  }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi();

// Herencia -> se extiende la funcionalidad a otra clase
class Dog extends Animal {
  type: "Pastor alemán";

  constructor() {
    super(); // siempre primero con super se llama aal constructor de la clase padre
    console.log("Perro registrado");
  }
  sayHi() {
    this.identity;
  }
}

const myDog: Dog = new Dog();
myDog.sayHi();
