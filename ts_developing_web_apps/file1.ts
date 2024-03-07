export const greeting: string = "Hello world!";

export let age: number = 20;

export class Employee {
  empCode: number;
  empName: string;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }

  displayEmployee() {
    console.log(`Employee code: ${this.empCode}, EMployee name= ${this.empName}`);
  }
}

