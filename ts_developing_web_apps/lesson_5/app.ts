/**
 * These lines of code are used to import
 * all the other files that are needed to run the code.
 */
import echo from "./generics";
import Book from "./book";
import Collection from "./collection";
import { Decorator, Positives } from "./decorators";

/**
 * These lines of code are used to directly output the given
 * vales or statement in the echo () section.
 */
console.log(echo("Hello"));
console.log(echo(135));
console.log(echo(true));

/**
 * These lines of code are used to give the book
 * values as it is imported from book files. Needed to run the code.
 */
let books: Book[] = [];
books.push(new Book("First", 110));
books.push(new Book("Second", 180));
books.push(new Book("Third", 135));
books.push(new Book("Fourth", 195));
let list: Collection<Book> = new Collection<Book>(books);
list.print();
list.sort();
list.print();

class Component {
  @Decorator operation(first: string, second: number): void {
    console.log("Original implementation");
  }
}

/**
 * These lines of code give the simple interest of the number p, t, r
 */
class Calculator {
  @Positives interest(p: number, t: number, r: number): number {
    return (p * t * r) / 100;
  }
}

/**
 * These lines of code 
 * give the main output for all the other typescript files combined.
 */
let calc: Calculator = new Calculator(); 
let interest: number = calc.interest(100, 6, 10);
console.log("Interest: " + interest);
let obj: Component = new Component(); 
obj.operation("Hello", 1234);