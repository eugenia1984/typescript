class Chat {
  msg: string;

  constructor(message: string) {
    this.msg = message;
  } 
  
  show() {
    return "Hello, " + this.msg
  }
}

/* Method decorator */
// It's defined before a method declaration
class Item {
  itemArray: Array<string>;
  constructor() {
    this.itemArray = [];
  }

  // @log
  Add(item: string): void {
    this.itemArray.push(item);
  }

  getAll(): Array<string> {
    return this.itemArray;
  }
}

/* Accessor Decorator */
// It's defined just before an accessor declaration
// It can be applied to the property descriptor for the accessor
// Observing, modifying or replacing an accessor's definitions is used.
class Employee {
  private _salary: number;
  private _name: string;

  //@configurable (false)
  get salary() {
    return `Rs. ${this.salary}`;
  }

  set salary(salary: any) {
    this._salary = +salary;
  }

  //@configurable(true) 
  get name() {
    return `Sir/Madam, ${this._name}`;
  }
  set name(name: string) {
    this._name = name;
  }
}

/* Property Decorator */
//- It's defined just before a property declaration
//- It's similar to the method of decorators
//- The only difference between property and method decorators is that 
// they do not accept property descriptors as an argument and do not return anything
class Person {
  msg: string;
  constructor(message: string) {
    this.msg = message;
  }

  // @validate
  // show(@required name: string) {
  //   return "Hello " + name + ", " + this.msg;
  // }
}