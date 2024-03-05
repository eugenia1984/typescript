// Touple
let tupla: [string, number] = ["hi", 8, "how", 5];

// Enum
enum Color {
  Red,
  Green,
  Blue
}

let blue = Color.Blue;

// Interface
interface Calc {
  subtract (first: number, second: number) : number
}

let Calculator: Calc = {
  subtract (first: number, second: number) : number {
    return first - second;
  }
}

// Function
function add(number1: number, number2: number): number {
  return number1 + number2;
}

// Anonymous function
let sum = function(numberX: number, numberY: number): number {
  return numberX + numberY;
}

// Generic
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("my string");
let output2 = identity<number>(100);

// Decorator
function f() {
  console.log("f(): evaluated");

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  }
}

class C {
  //@ f()
  method() {}
}


// Type assertion
let otherVar: any = "hello";
let myVar: any = 12;
myVar = otherVar as string;
console.log(typeof(myVar));

// type assertion using <>
myVar = <string>otherVar;
console.log(typeof(myVar));