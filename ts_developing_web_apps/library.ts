/* These lines of code are used to create a
constructor with a set of data that needs to be
displayed and those data are assigned with */
class Book {
  // constructor
  constructor(private _isbn: number, private _title: string) {}

  // Getters ans Setters
  public get isbn(): number {
    return this._isbn;
  }

  public set isbn(isbn: number) {
    if (isbn > 0) this._isbn = isbn;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    if (title != null && title != undefined && title.trim().length > 0)
      this._title = title;
  }
}

/* These lines of code are used
to create interface Library */
interface Library {
  add(book: Book): void;
  search(title: string): Book[];
  find(isbn: number): Book;
}

/* These lines of code are used to set the structure
for the library to store the books values */
class SimpleLibrary implements Library {
  protected books: Book[];
  // constructor
  constructor() {
    this.books = [];
  }

  // Methods
  public add(book: Book): void {
    if (book == null || book == undefined) return;
    this.books.push(book);
  }

  public find(isbn: number): Book {
    for (let book of this.books) if (book.isbn == isbn) return book;
    return null as any;
  }

  public search(title: string): Book[] {
    let results: Book[] = [];
    for (let book of this.books) {
      if (book.title == title) results.push(book);
    }
    return results;
  }
}

/* These lines of code are used to calculate the
number of books added to the library. */
let library: Library = new SimpleLibrary();
let book = new Book(123, "Typescript");
library.add(book);
let results: Book[] = library.search("Typescript");
console.log(`Found ${results.length} book(s)`);
