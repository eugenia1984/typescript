import Collectable from "./collectable";

export default class Collection<T extends Collectable<T>> {
  constructor(private data: T[]) {}

  public sort(): void {
    for (let i = 0; i < this.data.length - 1; i++) {
      for (let j = 0; j < this.data.length - 1; j++) {
        if (this.data[j].compare(this.data[j + 1])) {
          let temp = this.data[j];
          this.data[j] = this.data[j + 1];
          this.data[j + 1] = temp;
        }
      }
    }
  }

  public print(): void {
    for (let item of this.data) {
      item.print();
    }
  }
}
