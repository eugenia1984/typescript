interface PersonInterface {
  name: string;
  code: string | number;
  charge: number;
  description?: string;
  sayHello: () => string;
}

class PersonClass {
  sayHello() {
    console.log("Hi!");
  }
}

// Como es una interface, al crearla deben ir todas las propiedades
const personOne: PersonInterface = {
  name: "",
  code: "",
  charge: 0,
  sayHello: function (): string {
    throw new Error("Function not implemented.");
  },
};

// const personTwo: PersonClass = { sayHello() {} };
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();

// Las interfaces se IMPLEMENTAN y las clases se EXTIENDEN
interface PetInterface {
  sayHello: () => string;
}

class PetClass {
  sayHello() {
    return "Hola!";
  }
}

// Nos obliga a seguir el contrato
class Dogs implements PetInterface {
  sayHello() {
    return "Hola desde dog!";
  }
}

// Nos permite a reutilizar
class Cat extends PetClass {}