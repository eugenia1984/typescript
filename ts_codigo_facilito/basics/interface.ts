interface Person {
  name: string;
  code: string | number;
  charge: number;
  description?: string; // es opcional
  sayHello: () => string;
}

let person: Person = {
  name: 'Kevin',
  code: '01',
  charge: 1,
  description: 'Hola',
  sayHello: () => 'Hola'
}

let secondPerson : Person = {
  name: "",
  code: "",
  charge: 0,
  sayHello: () => 'Hi'
}

secondPerson.description?.toUpperCase();