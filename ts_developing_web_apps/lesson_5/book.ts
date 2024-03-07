import Collectable from "./collectable";

export default class Book implements Collectable<Book> {
  constructor(public title: string, public price: number) {}
  
  compare(other: Book): boolean {
    if (this.price > other.price) return true;
    return false;
  }

  print(): void {
    console.log(`${this.title}-${this.price}`);
  }
}
