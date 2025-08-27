/******** Mapped Types*****/
// Crear types de manera dinámica basándonos en otros types interfaces
interface Person {
  name: string;
  age: number;
}

interface getPerson {
  getName: () => string;
  getAge: () => number;
}