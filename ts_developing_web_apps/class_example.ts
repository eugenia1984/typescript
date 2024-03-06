class Car {
  // atribute
  engine: string;
  // constructor
  constructor(engine: string) {
    this.engine = engine;
  }
  // method
  disp(): void {
    console.log("Engine is: " + this.engine);
  }
}