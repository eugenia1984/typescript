/********** Type compatibility ***************/
// Case 1
interface Pet {
  name?: string;
}

class Dog {
  name?: string;
}

let pet: Pet;

// Como la estructura de Pet y Dog son iguales no hay error
// Ok, because od structural typing
pet = new Dog();

interface PetInterface2 {
  name: string;
}

// Case 2
let pety: PetInterface2;
// dogy's inferred type is {name: string, owner: string;}
let dogy = { name: "Lassie", owner: "Rudd" };
pety = dogy;
console.log(pety);

// Case 3
interface Pet3 {
  name: string;
}

let dog3 = { name: "Lassie", owner: "Rudd" };

function greet(pet3: Pet3) {
  console.log(`Hello, ${pet3.name}`);
}

greet(dog3);

// Case 4
enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Blue,
  Green,
}

let stat = Status.Ready;
// Da error
// stat = Color.Green; 

// Case 5
class Animal5 {
  feet: number;
  constructor(name: string, numFeet: number){}
}

class Size5 {
  feet: number;
  constructor(numFeet: number) {}
}

let a: Animal5;
let s: Size5;
a = s;
s = a;

// Case 6 - Generic
interface Empty<T> {}
let x: Empty<number>;
let y: Empty<string>;
x = y; // Ok, because y matches structure of x

// Case 7 - Generic
interface NotEmpty<T> {
  data: T
}
let x2: NotEmpty<number>;
let y2: NotEmpty<string>;
x2 = y2; // Error, because x and y are not compatible