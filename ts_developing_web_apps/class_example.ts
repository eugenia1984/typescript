/* CLass example */
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

/* Inherit example */
class Shape {
  area: number;

  constructor(a: number) {
    this.area = a;
  }
}

class Circle extends Shape {
  disp(): void {
    console.log("Area of the circle: " + this.area);
  }
}

// Class instance: object
let circle = new Circle(223);
circle.disp();

/* Class inheritance and method overriding */
class PrinterClass {
  doPrint(): void {
    console.log("doPrint() from Parent called...");
  }
}

class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint();
    console.log("doPrint() is printing a string...");
  }
}

let stringPrinter = new StringPrinter();
stringPrinter.doPrint();