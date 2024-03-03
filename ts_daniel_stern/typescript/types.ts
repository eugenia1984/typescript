var number: Number = 1;

// ERROR: Type 'string' is not assignable to type 'Number'.
// number = "Rob";

/******* TYPES *******/

// BOOLEAN
let isWinter: boolean = false;
isWinter = true;

// NUMBER
let count : Number = 5;

// STRING
let firstName: String = "Brian";

// ARRAY
let names : string[] = ["Jon", "Rick", "Ann"];

// ENUM
enum Starks {
  Jon,
  Bran,
  Eddard,
  Catlyn
}

let cat: Starks = Starks.Catlyn;

// VOID (nothing, a function that returns anything)
function sayHello(): void {
  console.log("Hello");
}

/********** Interfaces ***********/
// ? optional in the interface
interface Stark {
  name: string;
  age?: number;
}

function printName(stark: Stark) {
  console.log(stark.name);
}

printName({name: "Eddard"});
printName({name: "Joe"});