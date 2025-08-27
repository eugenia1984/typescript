/******** Mapped Types*****/
// Crear types de manera dinámica basándonos en otros types interfaces
interface Person {
  name: string;
  age: number;
}

// Si tuviera una interface deberia hacer por cada property de la interface Person una property de GetPerson
// interface GetPerson {
//  getName: () => string;
//  getAge: () => number;
// }

type Getter<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
}

type GetPerson = Getter<Person>;

interface Animal {
  id: string;
  name: string;
  type: number;
  isAdopted: boolean;
}

type GetAnimal = Getter<Animal>;
