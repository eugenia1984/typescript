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
    console.log("Hello " + person)
  }
}

let neds = new Starks();

neds.saying = "Winter is coming";

neds.hello("Ann");