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