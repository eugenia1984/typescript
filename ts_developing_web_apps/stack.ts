/**
 * These lines of code are used declare the access specifiers 
 * to create the structure of the number stack.
 */

class Stack<S> {
  private items: S[] = [];
  private index: number = -1;
  constructor(private capacity: number) {}
  public push(item: S): void {
    if (this.index < this.capacity - 1) {
      this.items.push(item);
      this.index++;
    }
  }
  public pop(): S {
    if (this.index > -1) {
      return this.items[this.index--];
    } else {
      return null as any;
    }
  }
}

/**
 * These lines of code use for loop 
 * to stack the values and display the output.
 */
let names: Stack<number> = new Stack<number>(15); 

for(let i=0; i<15; i++) {
  names.push(i);
}

for(let i=0; i<15; i++) {
  console.log(names.pop());
}