/************ Classes ************/
class Starks {
  name: string = "Brandon"; // default property
  static castle: string = "Winterfell";
  saying: string;

  // Constructor
  constructor() {
    // default property
    this.saying = "Winterfell";
  }

  // Method
  hello(person: string) {
    console.log("Hello " + person);
  }
}

let neds = new Starks();

neds.saying = "Winter is coming";

neds.hello("Ann");

/******* Inheritance ******/
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(this.name + " is dancing");
  }
}

let person = new Person("Brian");
person.dance();

// Extends from another class, the father class
class AwesomePerson extends Person {
  // override dance()
  dance() {
    console.log("So awesome");
    super.dance(); // call the father
  }
}

let newAwesomePerson = new AwesomePerson("Eugenia");
newAwesomePerson.dance(); 
//So awesome
// Eugenia is dancing
