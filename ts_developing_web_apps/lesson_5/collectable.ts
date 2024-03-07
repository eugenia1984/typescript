export default interface Collectable<T> {
  compare(other: T): boolean;
  print(): void;
}
